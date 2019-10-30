import React, { Component } from 'react';
import Clock from './Clock';
import withTimer from './withTimer';
import TabSelectSimple from './TabSelector';
import Think from './ThinkingInReact';
import Mobile from '../../component/hightOrder/Mobile';
import Username from '../../component/hightOrder/Username';
import Context from './Context';
import ReactPatten from './reactPattern';
import Hook from '../Hooks';
import UseStateDemo from '../Hooks/useStateDemo';
class Home extends Component {
    render() {
        return (
            <div>
                <Hook />
                <UseStateDemo />
            </div>
        );
    }
}
export default Home;

// export default withTimer(Home)
