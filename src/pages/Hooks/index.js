import React, { useState, useEffect } from 'react';

// State Hook
// useState 会返回一对值[当前状态，更新他的函数]
// Effect Hook
// useEffect
// useEffect(()=>{
//     document.title = 'you ....'
// })
// 只在最顶层使用 Hook不要在循环，条件或嵌套函数中调用 Hook
export default function Example() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        console.log('useEffect', count);
    });

    const [obj, setObj] = useState([
        {
            name: '张三',
            age: 11
        }
    ]);

    const addname = () => {
        setObj([...obj, { name: '李四', age: 12 }]);
    };

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {obj.map((item, index) => (
                <div key={index}>
                    {item.name} 年龄：{item.age}
                </div>
            ))}
            <button onClick={addname}>btn</button>
        </div>
    );
}
