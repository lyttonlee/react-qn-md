import React, { useState, useEffect } from 'react'
import Show from './Show'
import Edit from './Edit'
import marked from 'marked'
import hljs from 'highlight.js'
import '../assets/editor.less'

function Editor(props) {
  
  const {
    initInfo,
    edit,
    theme,
    getToken,
    token,
    domain,
    customStyle,
    updateInfo,
    imgStyle
  } = props

  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })

  // console.log(marked)
  const initHtml = initInfo ? marked(initInfo) : ''
  const [htmlInfo, setHtmlInfo] = useState(initHtml)
  const [mdInfo, setMdInfo] = useState(initInfo)

  function onMdInfoChange (info) {
    // console.log(info)
    setMdInfo(info)
    updateInfo && updateInfo(info)
    transMdToHtml(info)
  }

  const transMdToHtml = (info) => {
    // console.log(info)
    const newHtml = marked(info)
    // console.log(newHtml)
    setHtmlInfo(newHtml)
    // console.log(htmlInfo)
  }

  useEffect(() => {
    getToken && getToken()
    const time = setInterval(() => {
      getToken && getToken()
    }, 120000)
    return () => {
      // marked = null
      time && clearInterval(time)
    }
  }, [])
  useEffect(() => {
    // console.log(initInfo)
    setMdInfo(initInfo)
    updateInfo && updateInfo(initInfo)
    transMdToHtml(initInfo)
  }, [initInfo])
  return (
    <div id="editor" className={ theme } >
      { edit && <Edit customStyle={customStyle} imgStyle={imgStyle} info={ mdInfo } token={token} domain={domain} onInfoChange={ onMdInfoChange } ></Edit> }
      <Show htmlInfo ={ htmlInfo } customStyle={customStyle}></Show>
    </div>
  )
}

Editor.defaultProps = {
  edit: true,
  initInfo: '',
  theme: 'light',
  token: '',
  domain: '',
  customStyle: {},
  imgStyle: '',
  updateInfo: null,
  getToken: null
}

export default Editor
