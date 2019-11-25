import React, { useState, useEffect, useRef, useCallback } from 'react';
import anime from 'animejs';

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

function Demo1() {
    const [anime01, setAnime01] = useState(false);
    const [anime02, setAnime02] = useState(false);
    const element = useRef();

    useEffect(() => {
        anime01 && !anime02 && animate01();
        anime02 && !anime01 && animate02();
    }, [anime01, anime02]);

    function animate01() {
        if (element) {
            anime({
                targets: element.current,
                translateX: 400,
                backgroundColor: '#FF8F42',
                borderRadius: ['0%', '50%'],
                complete: () => {
                    setAnime01(false);
                }
            });
        }
    }

    function animate02() {
        if (element) {
            anime({
                targets: element.current,
                translateX: 0,
                backgroundColor: '#FFF',
                borderRadius: ['50%', '0%'],
                easing: 'easeInOutQuad',
                complete: () => {
                    setAnime02(false);
                }
            });
        }
    }

    function clickHandler() {
        setAnime01(true);
        setTimeout(setAnime02.bind(null, true), 500);
    }

    return (
        <div className="container" onClick={clickHandler}>
            <div className="el" ref={element} style={{ width: 50, height: 50, background: 'red' }} />
        </div>
    );
}
export default Demo1;
