import React, { useState } from 'react';

function BlogForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // 阻止表单默认提交行为
        try {
            const response = await fetch('https://luoyewebflask.azurewebsites.net/save_blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // 解析 JSON 响应体
            alert(data.message); // 显示消息
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save blog: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Blog Post</h2>
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
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default BlogForm;