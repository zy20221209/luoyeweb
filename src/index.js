// 项目的入口，从这里开始运行

// react必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入项目的根组件
import App from './App';

// 把App根组件渲染到id为root的dom节点上（处于public/index.html）
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
