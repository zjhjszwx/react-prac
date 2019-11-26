import React, { useState, useEffect } from 'react';

function fetchApi() {
    return fetch('https://news-at.zhihu.com/api/4/news/latest').then(res => {
        return res.json();
    });
}

function UseHook() {
    const { feed, loading, setLoading } = useFeed2();
    console.log(feed);
    return (
        <div>
            <button onClick={() => setLoading(true)}>use defined</button>
        </div>
    );
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

export default UseHook;
