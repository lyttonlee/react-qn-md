import React, { useState, useRef } from 'react'
import {
  upload,
  isImage
} from '../util/utils'

function Edit (props) {
  const {
    info,
    onInfoChange,
    domain,
    token,
    customStyle,
    imgStyle
  } = props
  if (!domain) {
    console.log('缺少必须的七牛云外链域名参数 --> domain, 请添加')
  }
  // 定义编辑区域ref 以获得dom对象
  const textRef = useRef(null)
  // 编辑区域内容
  const [textInfo, setInfo] = useState(info)
  // const [token, setToken] = useState('')

  // console.log(info)
  // 编辑区域内容改变时的事件监听
  function textAraeChange (ev) {
    // console.log(ev.target.value)
    setInfo(ev.target.value)
    onInfoChange(ev.target.value)
  }
  // 拖动文件(图片)到编辑区域监听
  function onDrop (ev) {
    ev.preventDefault()
    if (!token) {
      console.log('没有实现七牛云上传token')
      return
    }
    // console.log(token)
    const myField = textRef.current
    const start = myField.selectionStart
    // console.log(myField.value)
    const files = ev.dataTransfer.files
    for (let i = 0; i < files.length; i++) {
      if (isImage(files[i])) {
        upload(files[i], token, domain, imgStyle).then((url) => {
          const imgStr = `![${files[i].name}](${url})\n`
          myField.value = myField.value.substring(0, start) + imgStr + myField.value.substring(start, myField.value.length)
          setInfo(myField.value)
          onInfoChange(myField.value)
          // console.log(textInfo)
        })
      } else {
        console.log('只能上传图片，自动忽略非图片文件')
      }
    }
  }

  return (
    <div className="editor-content">
      <textarea style={customStyle} ref={ textRef } value={ textInfo } onDrop={onDrop} onKeyUp={textAraeChange} onChange={ textAraeChange } className="area" placeholder="请使用markdown语法编辑"></textarea>
    </div>
  )
}

Edit.defaultProps = {
  info: '',
  customStyle: '',
  imgStyle: ''
}

export default Edit
