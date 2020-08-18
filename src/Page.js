import React, { useState } from 'react'
import Editor from './editor/Editor'

function Page () {
  const [token, setToken] = useState('')
  const getToken = () => {
    fetch('/api/uptoken', {
      method: 'GET'
    }).then((res) => {
      if (res.status === 200) {
        res.text().then((token) => {
          setToken(token) 
        })
      }
    })
  }
  return (
    <Editor token={token} domain="http://doc.huili.cool/" theme="dark" getToken={getToken} customStyle={{height: '40vh', overflow: 'auto'}} ></Editor>
  )
}

export default Page
