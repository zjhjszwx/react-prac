import React from 'react';
import classnames from 'classnames';
import './index.scss';
const defaultProps = {
    type: '',
  spin: false // 是否旋转
}

const preFix = 'advance';

export default (props = defaultProps) => {
    // 依次从props中取出可能会出现的值，此处的other表示其余所有剩余的属性，这是ES6的语法
    const { type, className, spin, color, style, ...other } = props;

    // 利用classnames方法计算出最终的classname字符串。
    const cls = classnames({
        [`${preFix}-icon`]: true,
        [`${preFix}-icon-spin`]: !!spin || type === 'loading',
        [`${preFix}-icon-${type}`]: true
    }, className);

    // es6的展开运算符与变量属性同名简写语法，得到最终的style样式
    const _style = { ...style, color }

    return (
        <i className={cls} {...other} style={_style}></i>
    )
}

