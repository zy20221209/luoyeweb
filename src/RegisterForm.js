import React, { useState } from 'react';

function RegisterForm({ onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onRegister(username, password, email);
    };

    return (
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
    );
}

export default RegisterForm;