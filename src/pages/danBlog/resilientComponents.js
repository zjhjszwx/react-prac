import React from 'react'

/**
 * 1.不阻断数据流
 *  不要在 Side Effects 里阻断数据流
 *  不要在优化中阻断数据流

 * 2.时刻准备渲染
  不要试图在组件行为中，假设任何不必要的时序信息。你的组件应该随时可以重新渲染。
 * 3.没有单例组件
  即使组件只渲染一次，但通过设计让它渲染两次也不会被破坏，是更好了。
 * 4.隔离本地状态
 */


class Button extends React.Component {
  state = {
    color: this.props.color
  };
  render() {
    const { color } = this.state; // 🔴 `color` 不更新了！
    console.log(color)
    return (
      <button className={'Button-' + color}>
        {this.props.children}
        123
      </button>
    );
  }
}

class Parent extends React.Component {
  state = {
    color: 'red'
  };
  change = () => {
    this.setState({
      color: 'blue'
    })
  }
  render() {
    return <div>
      <button onClick={this.change.bind(this)}>change</button>
      <Button color={this.state.color}></Button>
    </div>
  }
}

export default Parent
