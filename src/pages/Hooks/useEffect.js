import React, { useState, useEffect, useRef, useCallback } from 'react';
import anim from 'animejs';

// 每次副作用执行，都会返回一个新的clear函数
// clear函数会在下一次副作用逻辑之前执行（DOM渲染完成之后）
// 组件销毁也会执行一次
function useEffectDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 300);

        console.log('effect', timer);

        return () => {
            console.log('clear', timer);
            clearTimeout(timer);
        };
    }, []);

    console.log('render');
    return (
        <div>
            <div>{count}</div>
            <div style={{ width: 50, height: 50, background: 'red' }}></div>
            <button onClick={() => setCount(count + 1)}>btn</button>
            <TestUseCallback num={count} />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    function handleAlertClick() {
        setTimeout(() => {
            alert('you clicked on: ' + count);
        }, 3000);
    }

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <button onClick={handleAlertClick}>alert</button>
        </div>
    );
}
// 每一个effect版本“看到”的count值都来自于它属于的那次渲染

function Counter2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default useEffectDemo;

//回调函数及依赖项数组作为参数传入 useCallback, 返回该函数的memoized版本
// useCallback的返回结果是一个函数，函数体正好就是传入的第一个参数。
// useMemo的返回结果是一个值，是第一个参数的运行结果。

function TestUseCallback(num) {
    const callback = useCallback(() => {
        return num;
    }, []);

    console.log('记忆 num > ', callback());
    console.log('原始 num > ', num);
    return (
        <div>
            <p>TestUseCallback</p>
        </div>
    );
}
