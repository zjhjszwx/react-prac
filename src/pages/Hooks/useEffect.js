import React, { useState, useEffect, useRef } from 'react';

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
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
        }, 300);

        console.log('effect1', timer);

        return () => {
            console.log('clear2', timer);
            clearTimeout(timer);
        };
    }, []);

    console.log('render');
    return (
        <div>
            <div>{count}</div>
            <div style={{ width: 50, height: 50, background: 'red' }}></div>
            <button onClick={() => setCount(count + 1)}>btn</button>
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
export default Counter2;
