import React from 'react';
//属性代理
function Hoc(C) {
    return class Hoc extends React.Component {
        componentDidMount() {
            console.log(this.refs.C);
        }
        getRef = i => {
            console.log(i);
        };

        render() {
            return (
                <div style={{ fontSize: 20 }}>
                    <C refs={this.getRef.bind(this)} />
                </div>
            );
        }
    };
}

//反向继承
function HocII(ComponentClass) {
    return class Hoc extends ComponentClass {
        componentDidMount() {
            console.log(this.state);
        }
        render() {
            // console.log(this);
            // return super.render();

            // 劫持渲染
            const tree = super.render();
            const newTree = tree.props.children.filter(z => {
                return z && z.type && z.type === 'li';
            });
            return newTree;
        }
    };
}

@HocII
export default class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        };
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        this.textInput = React.createRef();
    }
    static displayName = 'Counter';
    static classMethod() {
        return 'hello';
    }
    getDiv = () => {
        return <div>getDiv</div>;
    };
    render() {
        console.log(this);
        return (
            <div ref="">
                <input type="text" ref={this.textInput} />
                <li>li</li>
            </div>
        );
    }
}
//问题
// 静态方法缺失
// https://juejin.im/post/5c72b97de51d4545c66f75d5#heading-19
