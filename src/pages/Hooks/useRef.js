import React, { useState, useEffect, useRef } from 'react';

export default function Demo() {
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
