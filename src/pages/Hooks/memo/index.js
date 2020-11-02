// index.js
import React, { useState, useCallback } from "react";
import Child from './child'
import Child2 from './child2';
export default () => {
    const [title, setTitle] = useState("这是一个 title")
    const [subtitle, setSubtitle] = useState("我是一个副标题");
    const [num, setNum] = useState(0)

    const change = () => {
        setTitle("title 已经改变");
        // setNum(Math.random())
    }

    const callbackMemo = useCallback(change, [])
    return (
        <div className="App">
            <h1>{title}{num}</h1>
            <h2>{subtitle}</h2>
            {/* <button onClick={change}>改名字</button> */}
            <button onClick={() => { setSubtitle('副标题改变了') }}>修改副标签</button>
            <Child name="桃桃" data={{ test: 1 }} callback={callbackMemo}></Child>
            <Child2 />
        </div>
    );
}
// memo是高阶组件
//1.在props相同的情况下, 防止重复渲染
//2.当父组件中 useState , useContext context发生变化时, 仍会重新渲染

// useCallback
// 1.函数组件重新渲染会导致 函数重新创建, 返回一个函数的memoized
// 2.但是子组件不能有对象传入, 否则还是会重新渲染
{/* <Child name="桃桃" data={{ test: 1 }} callback={callbackMemo}></Child> */ }

// useMemo
// 1.缓存一个函数的计算结果, 不会重复计算