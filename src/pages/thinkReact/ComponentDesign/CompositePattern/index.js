import React, { useRef, useState } from 'react';
const Tab = ({ children, onChange }) => {
  const activeIndex = useRef(null);
  const [, forceUpdate] = useState({});
  /* 提供给 tab 使用  */
  const tabList = [];
  /* 待渲染组件 */
  let renderChildren = null;
  React.Children.forEach(children, (item) => {
    /* 验证是否是 <TabItem> 组件  */
    if (React.isValidElement(item) && item.type.displayName === 'TabItem') {
      const { props } = item;
      const { name, label } = props;
      const tabItem = {
        name,
        label,
        active: name === activeIndex.current,
        component: item,
      };
      if (name === activeIndex.current) renderChildren = item;
      tabList.push(tabItem);
    }
  });
  /* 第一次加载，或者 prop chuldren 改变的情况 */
  if (!renderChildren && tabList.length > 0) {
    const fisrtChildren = tabList[0];
    renderChildren = fisrtChildren.component;
    activeIndex.current = fisrtChildren.component.props.name;
    fisrtChildren.active = true;
  }

  /* 切换tab */
  const changeTab = (name) => {
    activeIndex.current = name;
    forceUpdate({});
    onChange && onChange(name);
  };

  return (
    <div>
      <div className="header">
        {tabList.map((tab, index) => (
          <div className="header_item" key={index} onClick={() => changeTab(tab.name)}>
            <div className={'text'}>{tab.label}</div>
            {tab.active && <div className="active_bored"></div>}
          </div>
        ))}
      </div>
      <div>{renderChildren}</div>
    </div>
  );
};

Tab.displayName = 'tab';
const TabItem = ({ children }) => {
  return <div>{children}</div>;
};

const app = () => {
  return (
    <Tab>
      <TabItem name="1" label="1">
        1111
      </TabItem>
      <TabItem name="2" label="2">
        2222
      </TabItem>
      <TabItem name="3" label="3">
        3333
      </TabItem>
    </Tab>
  );
};

export default app;
