import React, {Component} from 'react';
import Clock from './Clock';
import withTimer from './withTimer';
import TabSelectSimple from './TabSelector'
import Think from './ThinkingInReact';

import Context from './Context';
class Home extends Component {
    

    render() {
        return (
            <div>
                {/* <Clock/> */}
                {/* withTimer{this.props.time.toLocaleString()} */}
                {/* <TabSelectSimple/> */}
                {/* <Think /> */}
                <Context />
            </div>
        )
    }
}
export default Home;
// export default withTimer(Home)


