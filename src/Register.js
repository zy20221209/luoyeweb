import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // 这里应该调用后端API来注册用户
        console.log('注册用户：', username, email, password);
        // 设置一些状态或者导航到其他页面
    };

    return (
        <div>
            <h1>注册</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>用户名:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>邮箱:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>密码:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">注册</button>
            </form>
        </div>
    );
}

export default Register;