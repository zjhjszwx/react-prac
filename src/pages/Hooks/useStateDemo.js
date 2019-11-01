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

export default Demo;
