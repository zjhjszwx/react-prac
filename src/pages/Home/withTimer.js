import React from "react";

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
