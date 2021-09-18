import React from 'react';
const Context = React.createContext();

function Index() {
  return (
    <Context.Consumer>
      {(contextValue) => (
        <div>
          名称：{contextValue.name}
          作者：{contextValue.author}
        </div>
      )}
    </Context.Consumer>
  );
}

function RenderProps() {
  const value = {
    name: '《React进阶实践指南》',
    author: '我不是外星人',
  };
  return (
    <Context.Provider value={value}>
      <Index />
    </Context.Provider>
  );
}

export default RenderProps;
