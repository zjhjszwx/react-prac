import React from 'react';
import { Slider } from 'antd';
function Demo({ name, age }) {
    return (
        <div>
            <Slider max={100} min={0} />
            <Slider max={100} min={0} />
            <Slider max={100} min={0} />
            <Slider max={100} min={0} />
            <Slider max={100} min={0} />
            <Slider max={100} min={0} />
        </div>
    );
}

export default Demo;
