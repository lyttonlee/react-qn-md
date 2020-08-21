import React, { useState, useEffect } from 'react'
import Editor from './editor/Editor'

function Page () {
  const [token, setToken] = useState('')
  const [reactInfo, setReactInfo] = useState('')
  const getToken = () => {
    fetch('http://www.huili.cool:8901/api/uptoken', {
      method: 'GET'
    }).then((res) => {
      if (res.status === 200) {
        res.text().then((token) => {
          setToken(token) 
        })
      }
    })
  }
  function getMd (url) {
    fetch(url, {
      method: 'GET',
      mode: 'cors'
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        res.text().then((md) => {
          // console.log(md)
          if (url === '/editor/react.md') {
            // console.log('react')
            // console.log(md)
            setReactInfo(md)
            // console.log(reactInfo)
          } else {
            // setVueInit(md)
            setReactInfo(md)
          }
        })
      }
    })
  }
  useEffect(() => {
    getMd('http://www.huili.cool:8901/api/uptoken')
  }, [])
  const updateInfo = (info) => {
    // do something with new info
    // save or submit ...
    console.log(info)
  }
  return (
    <Editor token={token} initInfo={reactInfo} domain="http://editor.huili.cool/" updateInfo={updateInfo} edit={true} theme="dark" getToken={getToken} customStyle={{height: '40vh', overflow: 'auto'}} imgStyle="@center600" ></Editor>
  )
}

export default Page
