import React, { useState, useEffect, useRef } from 'react';

function Demo() {
    const inputEl = useRef(null);
    const [text, updateText] = useState('');

    // 使用 useRef 创建 textRef
    const textRef = useRef();
    useEffect(() => {
        // 将 text 值存入 textRef.current 中
        textRef.current = text;
        console.log('textRef.current：', textRef.current);
    });

    onfocus = () => {
        inputEl.current.focus();
        inputEl.current.value = 'Hello, useRef';
    };
    return (
        <div>
            <input ref={inputEl} />
            <button onClick={onfocus}>btn</button>
            <input value={text} onChange={e => updateText(e.target.value)} />
        </div>
    );
}

function Demo2() {
    const isMount = useRef(false)

    console.log(isMount)



    return <div>1</div>
}

export default Demo2
// useRef 存储一些无关的参数, 也可以用来获取dom, 用useState也可以, 但是会re-render