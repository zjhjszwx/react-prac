import React, { useState, useEffect } from 'react';

function fetchApi() {
    return fetch('https://api.github.com/users/github').then(res => {
        return res.json();
    });
}

function UseHook() {
    // const { feed, loading, setLoading } = useFeed2();
    // console.log(feed);

    return <div>{/* <button onClick={() => setLoading(true)}>use defined</button> */}</div>;
}
//demo1 封装api
function useFeed() {
    const [feed, setFeed] = useState({});

    useEffect(() => {
        fetchApi().then(res => {
            setFeed(res);
        });
    }, []);
    return feed;
}
//demo2 刷新请求
function useFeed2() {
    const [feed, setFeed] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading) {
            return;
        }
        fetchApi().then(res => {
            setLoading(false);
            setFeed(res);
        });
    }, [loading]);
    return { feed, loading, setLoading };
}

// demo3 埋点
function useDemo3() {
    let count = 0;
    useEffect(() => {
        console.log('开始计时');
        const timer = setInterval(() => {
            count += 1;
            console.log(count);
        }, 1000);
        return () => {
            console.log('停留时间', count + 's');
            clearInterval(timer);
        };
    }, []);
}

// 自定义hook作用 逻辑片段复用。
// mixin state命名重复,无法知道state来源
// 高阶组件 无法知道props来源,也会导致命名重复
// 组件复用 render props 没有抽出逻辑,还是组件化思维
export default UseHook;
