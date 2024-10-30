import React, { useState } from 'react';

function Settings() {
    // 假设这是从后端获取的设置数据示例
    const [settings, setSettings] = useState({
        notifications: true,
        theme: 'light',
        language: 'English'
    });

    // 处理复选框的变化
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: checked,
        }));
    };

    // 处理下拉菜单的变化
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>设置</h1>
            <form>
                <div>
                    <label>接收通知:</label>
                    <input
                        type="checkbox"
                        name="notifications"
                        checked={settings.notifications}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div>
                    <label>主题:</label>
                    <select name="theme" onChange={handleSelectChange}>
                        <option value="light">浅色</option>
                        <option value="dark">深色</option>
                    </select>
                </div>
                <div>
                    <label>语言:</label>
                    <select name="language" onChange={handleSelectChange}>
                        <option value="English">English</option>
                        <option value="中文">中文</option>
                        {/* 可以添加更多的语言选项 */}
                    </select>
                </div>
                {/* 可以添加更多的设置选项 */}
            </form>
        </div>
    );
}

export default Settings;