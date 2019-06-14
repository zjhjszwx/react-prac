import React, {Component} from 'react';
import Clock from './Clock';
import withTimer from './withTimer';
import TabSelectSimple from './TabSelector'
import Think from './ThinkingInReact';
import Mobile from '../../component/hightOrder/Mobile';
import Username from '../../component/hightOrder/Username';
import Route from './ReactRoute';
class Home extends Component {
    

    render() {
        return (
            <div>
                {/* <Clock/> */}
                {/* withTimer{this.props.time.toLocaleString()} */}
                {/* <TabSelectSimple/> */}
                {/* <Think /> */}
                {/* <Mobile /> */}
                {/* <Username /> */}
                <Route />
            </div>
        )
    }
}
export default Home;

// export default withTimer(Home)

