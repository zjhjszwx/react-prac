import React, { Component } from 'react';
import PropTypes from 'prop-types'
//基于生产消费者模式
// Context的生产者 Provider 通常是父节点, Context的消费者 Consumer 通常是子节点

class MiddleComponent extends Component {
    render() {
        return <ChildrenComponent />;
    }
}

class ChildrenComponent extends Component {
    static contextTypes = {
        name:PropTypes.string,

    }
    render() {
        console.log(this.context)
        return <div />;
    }
}
// 1.需要一个childContextTypes声明提供给子节点对的Context对象的属性
// 并实现一个getChildContext方法,返回一个Context plain Object
// 子组件通过静态属性 contextTypes声明后,才能访问context对象
export default class Context extends Component {
    static childContextTypes = {
        name: PropTypes.string
    };

    getChildContext = () => {
        return {
            name: 'aa'
        };
    };
    render() {
        return <MiddleComponent />;
    }
}


//slot 将父组件插入到子组件模板  