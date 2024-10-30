import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/get_blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;