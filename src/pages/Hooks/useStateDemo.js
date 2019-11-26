import React, { useState } from 'react';
import { Slider } from 'antd';
function Demo({ name, age }) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
    const [radius, setRadius] = useState(0);
    const style = {
        height: `${height}px`,
        width: `${width}px`,
        background: `rgb(${color.r},${color.g},${color.b})`,
        borderRadius: `${radius}px`
    };

    return (
        <div>
            <Slider max={100} min={0} onChange={e => setHeight(e)} />
            <Slider max={100} min={0} onChange={e => setWidth(e)} />
            <Slider max={255} min={0} onChange={e => setColor({ ...color, r: e })} />
            <Slider max={255} min={0} onChange={e => setColor({ ...color, g: e })} />
            <Slider max={255} min={0} onChange={e => setColor({ ...color, b: e })} />
            <Slider max={100} min={0} onChange={e => setRadius(e)} />
            <div className="reatangle" style={style} />
        </div>
    );
}
//其他定义方式
function Demo2() {
    const [count, setCount] = useState(0);

    const [count2] = useState(0); //可以这样定义一些逻辑变量
    /*  setTimeout(() => {
        setCount(count + 1);
        // 无法获取 count
        console.log(count);
    }, 2000); */

    return <button onClick={() => setCount(count + 1)}>btn{count}</button>;
}
//修改方式
function Demo3() {
    const [count, setCount] = useState({ a: 1, b: 2 });

    const click2 = () => {
        count.b = 4;
        console.log(count);
    };
    console.log('render');
    return (
        <div>
            {/* 需要解构修改 */}
            <button onClick={() => setCount({ ...count, a: count.a + 1 })}>btn</button>
            <button onClick={click2}>btn2</button>
            <p>{count.a}</p>
            <p>{count.b}</p>
        </div>
    );
}

export default Demo3;
