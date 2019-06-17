import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import 'antd/dist/antd.css'
import getRouter from './router/router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}

// import React, { Component } from 'react';
// // import { HashRouter as Router, Route } from 'react-router-dom';
// import { Router, Route } from './pages/Home/Router';
// import ReactDom from 'react-dom';
// const Home = (props, context) => {
//     console.log(window.location.hash.slice(1));
//     console.log(props, context);
//     return <div>home</div>;
// };
// const User = () => <div>user</div>;
// const Profile = () => <div>Profile</div>;
// ReactDom.render(
//     <Router>
//         <div>
//             <Route path="/home" component={Home} />
//             <Route path="/user" component={User} />
//             <Route path="/profile" component={Profile} />
//         </div>
//     </Router>,
//     document.getElementById('app')
// );
