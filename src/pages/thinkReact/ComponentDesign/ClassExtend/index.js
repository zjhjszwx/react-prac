import React from 'react';
import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
const RouterPermission = React.createContext();

class PRoute extends Route {
  static contextType = RouterPermission;
  constructor(...arg) {
    super(...arg);
    const { path } = this.props;
    const isPermiss = this.context.indexOf(path) > -1;
    if (!isPermiss) {
      this.render = () => (
        <Route {...this.props}>
          <div>暂无权限</div>
        </Route>
      );
    }
  }

}

function Test1() {
  return <div>权限路由测试一</div>;
}

function Test2() {
  return <div>权限路由测试二</div>;
}

function Test3() {
  return <div>权限路由测试三</div>;
}

function Index({ history }) {
  const routerlist = [
    { name: '测试一', path: '/extends/a' },
    { name: '测试二', path: '/extends/b' },
    { name: '测试三', path: '/extends/c' },
  ];
  return (
    <div>
      {routerlist.map((item) => (
        <button key={item.path} onClick={() => history.push(item.path)}>
          {item.path}
        </button>
      ))}
      <Route component={Test1} path="/extends/a" />
      <Route component={Test2} path="/extends/b" />
      <Route component={Test3} path="/extends/c" />
    </div>
  );
}
const WrapIndex = withRouter(Index);

export default (props) => {
  /* 模拟的有权限的路由列表 */
  const permissionList = ['/extends/a', '/extends/b'];
  return (
    <RouterPermission.Provider value={permissionList}>
      <WrapIndex {...props} />
    </RouterPermission.Provider>
  );
};
