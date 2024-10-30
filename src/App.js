// 项目的根组件
// App.js->index.js->index.html

import BlogList from './BlogList'; // 假设这是显示博客列表的组件
import Register from './Register'; // 假设这是注册页面的组件
import Settings from './Settings'; // 引入Settings组件
import PostForm from './PostForm';
import BlogForm from './BlogForm';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // 引入App.css文件
import './BlogList.css'; // 确保路径正确



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div>
            <Link to="/">博客列表</Link>
            <Link to="/register">注册</Link>
            <Link to="/settings">设置</Link>
            <Link to="/post">发布博客</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post" element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;