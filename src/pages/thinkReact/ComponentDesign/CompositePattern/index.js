import React from 'react';

function CompositePattern() {
  return (
    <Groups>
      <Item name="《React进阶实践指南》" />
      <Item name="《Nodejs深度学习手册》" />
    </Groups>
  );
}

function Groups(props) {
  console.log('[ props ] >', props);
  const newChildren = React.cloneElement(props.children, { author: 'alien' });
  return <div>{newChildren}</div>;
}

function Item(props) {
  return (
    <div>
      <div> 名称： {props.name} </div>
    </div>
  );
}

export default CompositePattern;
