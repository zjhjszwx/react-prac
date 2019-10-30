// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
const appState = {
    title: {
        text: 'test',
        color: 'red'
    },
    content: {
        text: 'context',
        color: 'blue'
    }
};
function renderApp(appState, oldObj = {}) {
    console.log('render===app', appState.title, oldObj.title);
    renderTitle(appState.title, oldObj.title);
    renderContent(appState.content, oldObj.content);
    // 通过公共的方法 dispatch去修改 appState的值
    // stateChange({ type: "edit", data: "test2" });
    // renderTitle(appState.title);
}

function renderTitle(obj, oldObj = {}) {
    if (obj === oldObj) return;
    console.log('render===title');

    const dom = document.getElementById('root');
    dom.innerText = obj.text;
    dom.style.color = obj.color;
}
function renderContent(obj, oldObj) {
    if (obj === oldObj) return;

    console.log('render===content');
    const dom = document.getElementById('content');
    dom.innerText = obj.text;
    dom.style.color = obj.color;
}

//actions.js
function stateChange(action) {
    // console.log("=====", state);
    switch (action.type) {
        case 'edit':
            return {
                ...state,
                title: {
                    text: action.data
                }
            };
        default:
            state.title.text = 'default ..';
            break;
    }
}

function createStore(state, stateChange) {
    let listener = null;
    const getState = () => state;
    const subscribe = func => (listener = func);
    const dispatch = action => {
        state = stateChange(action);
        listener();
    };
    return { state, getState, subscribe, dispatch };
}
const store = createStore(appState, stateChange);
let state = store.getState();
store.subscribe(() => {
    const newState = store.getState();
    console.log(store);
    renderApp(newState, state);
    state = newState;
});
renderApp(state);
store.dispatch({ type: 'edit', data: '11' });
// store.dispatch(state, { type: "edit", data: "22" });
