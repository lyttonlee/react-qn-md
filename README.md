# react-qn-md

> markdown 语法的react web-component 组件，直接封装了七牛云上传方法，可以直接拖动图片到编辑区域实现上传

## 安装
```
npm install react-qn-md -S

or

yarn add react-qn-md -S
```

## api

**属性 props**

| name | required | type | default | description |
| :--: | :--: | :--: | :--: | :--: |
| initInfo | false | string | '' | 初始的md语法字符串 |
| theme | false | string | light | 颜色主题 'light' ,'dark' 可选 |
| domain | true |  string| --- | 七牛云空间的外链域名 |
| customStyle | false |  object| --- | 自定义编辑框的样式 |
| edit | false |  bool| true | 是否显示编辑框,false时用于展示 |
| token | true |  string| '' | 七牛云上传token |
| getToken | true |  function |  | 实现获取七牛云上传token |


## Use

```jsx
import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Editor from 'react-qn-md'

function App() {
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
    <div className="App">
      <Editor
        initInfo="## Hello World!"
        domain="http://doc.huili.cool/"
        token={token}
        getToken={getToken}
        theme="light"
        customStyle={{height: '40vh', overflow: 'auto'}} >
      </Editor>
    </div>
  );
}

export default App;

```

