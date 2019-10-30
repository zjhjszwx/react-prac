import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const InitState = {
    isLogin: 111,
    data: null
};

function reducer(state = InitState, action) {
    switch (action.type) {
        case 'login':
            return Object.assign({}, state, action.datas);
        case 'api':
            return Object.assign({}, state, action.datas);
        default:
            return state;
    }
}

const store = createStore(reducer);

const RootElement = props => {
    return (
        <div>
            111111
            <Child2 />
        </div>
    );
};
const Child = props => {
    console.log(props);
    return (
        <div>
            {props.isLogin}
            <button
                onClick={() =>
                    //可以直接dispatch
                    // props.dispatch({ type: "login", datas: { isLogin: 2222 } })
                    //也可以传入方法
                    props.isLoginfunc(Math.random())
                }
            >
                btn
            </button>
            <button
                onClick={() =>
                    //可以直接dispatch
                    // props.dispatch({ type: "login", datas: { isLogin: 2222 } })
                    //也可以传入方法
                    props.requestApi(Math.random())
                }
            >
                btn1
            </button>
        </div>
    );
};
//用来获取store里面的值
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        isLogin: state.isLogin,
        data: state.data
    };
};
//用来改变store的值
const mapDispatchToProps = dispatch => {
    return {
        isLoginfunc: val => dispatch({ type: 'login', datas: { isLogin: val } }),
        requestApi: () => {
            fetch('https://cnodejs.org/api/v1/topics')
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    dispatch({ type: 'api', datas: { data: res.data } });
                });
        }
    };
};

const Child2 = connect(
    mapStateToProps,
    mapDispatchToProps
)(Child);
ReactDOM.render(
    <Provider store={store}>
        <RootElement />
    </Provider>,
    document.getElementById('root')
);
