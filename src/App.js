// 项目的根组件
// App.js->index.js->index.html

import React, { useState } from 'react';
import BlogHeader from './BlogHeader';
import BlogPost from './BlogPost';
import SearchBar from './SearchBar'; // 引入SearchBar组件
import './App.css'; // 引入App.css文件

// 假设这是从后端获取的博客帖子列表
const blogPosts = [
  { id: 1, title: '我的第一篇博客', date: '2024-10-29', content: '这里是博客内容...' },
  // ...其他博客帖子
];

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // 搜索关键词状态
  // 根据搜索关键词过滤博客帖子
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      <BlogHeader />
      <SearchBar onSearch={setSearchTerm} /> {/* 传递搜索事件处理函数 */}
      <div className="blog-posts">
        {filteredPosts.map(post => (
          <BlogPost key={post.id} title={post.title} date={post.date} content={post.content} />
        ))}
        <BlogPost title="我的第一篇博客" date="2024-10-29" content="这里是博客内容..." />
        <BlogPost title="我的第一篇博客" date="2024-10-29" content="这里是博客内容..." />
        <BlogPost title="我的第一篇博客" date="2024-10-29" content="这里是博客内容..." />
        <BlogPost title="我的第一篇博客" date="2024-10-29" content="这里是博客内容..." />
        <BlogPost title="我的第二篇博客" date="2024-10-29" content="这里是博客内容..." />
        {/* 可以添加更多的博客帖子 */}
      </div>
    </div>
  );
}

export default App;
