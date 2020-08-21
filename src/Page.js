import React, { useState } from 'react'
import Editor from './editor/Editor'

function Page () {
  const [token, setToken] = useState('')
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
  const updateInfo = (info) => {
    // do something with new info
    // save or submit ...
    console.log(info)
  }
  return (
    <Editor token={token} domain="http://doc.huili.cool/" updateInfo={updateInfo} edit={true} theme="dark" getToken={getToken} customStyle={{height: '40vh', overflow: 'auto'}} ></Editor>
  )
}

export default Page
