import React from "react";

//高阶函数,封装了相同的逻辑
export default function withTimer(C) {
  return class extends React.Component {
    state = {
      date: new Date()
    };

    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState(prev => ({
          date: new Date()
        }));
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {
      return <C time={this.state.date} {...this.props} />;
    }
  };
}
