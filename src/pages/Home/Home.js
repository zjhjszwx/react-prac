import React, {Component} from 'react';
import Clock from './Clock';
import withTimer from './withTimer';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                {/* <Clock/> */}
                {/* withTimer{this.props.time.toLocaleString()} */}
            </div>
        )
    }
}

export default withTimer(Home)


