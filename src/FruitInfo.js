import React, { useState, useEffect } from 'react';

function FruitInfo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // 使用fetch获取数据
        fetch('https://food20241026.azurewebsites.net/ai')
            .then(response => response.json()) // 解析JSON
            .then(json => {
                // 将获取到的数据设置到state中
                setData(json);
            })
            .catch(error => {
                // 处理错误情况
                console.error('Error fetching data: ', error);
            });
    }, []); // 空依赖数组确保仅在组件挂载时执行

    // 根据数据状态渲染不同的内容
    if (!data) {
        return <div>加载中...</div>;
    }

    // 将JSON数据转换为字符串，因为JSON对象直接显示可能不是你想要的格式
    const jsonData = JSON.stringify(data, null, 2);

    return (
        <div>
            <h2>水果信息</h2>
            <pre>{jsonData}</pre> {/* 使用pre标签保持格式 */}
        </div>
    );
}

export default FruitInfo;