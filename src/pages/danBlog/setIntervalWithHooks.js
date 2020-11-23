import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  let [count, setCount] = useState(0);

  useInterval(() => {
    // 你自己的代码
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}

export default Counter