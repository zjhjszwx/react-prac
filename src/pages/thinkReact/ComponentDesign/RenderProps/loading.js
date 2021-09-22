import React, { useState, useRef, useMemo } from 'react';
import { SyncOutlined } from '@ant-design/icons';

function Loading({ children }) {
  const [showLoading, setShowLoading] = useState(false);
  const renderChildren = useMemo(
    () =>
      typeof children === 'function' ? children({ setShowLoading }) : null,
    [children]
  );
  return (
    <div style={{ position: 'relative' }}>
      {renderChildren}
      {/* {typeof children === 'function' ? children({ setShowLoading }) : null} */}
      {showLoading && (
        <div className="mastBox">
          {<SyncOutlined className="icon" spin twoToneColor="#52c41a" />}
        </div>
      )}
    </div>
  );
}

function App() {
  const setLoading = useRef(null);
  return (
    <div>
      <Loading>
        {({ setShowLoading }) => {
          console.log('渲染');
          setLoading.current = setShowLoading;
          return (
            <div>
              xxxx
              <button onClick={() => setShowLoading(true)}>loading</button>
            </div>
          );
        }}
      </Loading>
      <button onClick={() => setLoading.current && setLoading.current(false)}>
        取消 loading{' '}
      </button>
    </div>
  );
}

export default App;
