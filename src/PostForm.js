// PostForm.js
import React, { useState } from 'react';

function PostForm({ onPostSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const blogData = { title, content };
        fetch('http://localhost:5000/api/posts', { // 确保端口号与Flask服务器匹配
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFeedback('Blog post created successfully!');
                // 清空表单
                setTitle('');
                setContent('');
            })
            .catch((error) => {
                console.error('Error:', error);
                setFeedback('Failed to create blog post. Please try again.');
            });
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        rows="4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">发布博客</button>
            </form>
            {feedback && <p>{feedback}</p>}
        </div>
    );
}


export default PostForm;