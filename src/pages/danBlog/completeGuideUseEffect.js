import React, { useState, useEffect, useRef } from 'react'

function completeGuideUseEffect() {
  const [count, setCount] = useState(0);
  // 每次渲染都有一个新版本的 handleAlertClick,   每一个版本的handleAlertClick“记住” 了它自己的 count
  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000)
  }

  console.log(123)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  // 每次渲染都有自己的Effects
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// 在封闭的值始终不会变的情况下闭包是非常好的. 这非常容易思考,因为本质上实在引用常量
function Counter1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Example() {
  const [count, setCount] = useState(0)
  const latestCount = useRef(count);
  useEffect(() => {
    latestCount.current = count
    setTimeout(() => {
      console.log(`You clicked ${latestCount.current} times`);
    }, 3000);
  });
  return <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
  </button>
  </div>
}

function cleanEffect() {
  
}
export default Example
