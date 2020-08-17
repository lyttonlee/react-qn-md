import React from 'react'
import ReactDOM from 'react-dom'

import Editor from './editor/Editor'

ReactDOM.render(
  <Editor getToken={ () => {
    const token = 'dasadas'
  }} />,
  document.getElementById('app')
)
