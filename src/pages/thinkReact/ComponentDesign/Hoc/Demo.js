import React, { useState, useEffect } from 'react';
const loadingHoc = createHoc();
function Demo() {
  const [isShow, setIsShow] = useState(false);
  const ComponentA = loadingHoc(CompA);
  const ComponentB = loadingHoc(CompB);
  const ComponentC = loadingHoc(CompC);
  const ComponentD = loadingHoc(CompD);
  const ComponentE = loadingHoc(CompE);

  return (
    <div>
      <ComponentB />
      <ComponentA />
      <ComponentC />
      {isShow && <ComponentD />}
      {isShow && <ComponentE />}
      <button onClick={() => setIsShow(true)}> 挂载组件D ，E </button>
    </div>
  );
}

function createHoc() {
  const renderQueue = [];

  return function hoc(Component) {
    function RenderController(props) {
      /* RenderController 用于真正挂载原始组件  */
      const { renderNextComponent, ...otherprops } = props;
      useEffect(() => {
        renderNextComponent(); /* 通知执行下一个需要挂载的组件任务 */
      }, []);
      return <Component {...otherprops} />;
    }
    return class Wrap extends React.Component {
      constructor() {
        super();
        this.state = {
          isRender: false,
        };

        const tryRender = () => {
          this.setState({
            isRender: true,
          });
        };
        if (renderQueue.length === 0) this.isFirstRender = true;
        renderQueue.push(tryRender);
      }
      isFirstRender = false; /* 是否是队列中的第一个挂载任务 */

      renderNextComponent = () => {
        if (renderQueue.length > 0) {
          console.log('[ 挂载下一个组件 ] >');
          const nextRender = renderQueue.shift();
          nextRender();
        }
      };

      componentDidMount() {
        this.isFirstRender && this.renderNextComponent();
      }

      render() {
        const { isRender } = this.state;
        return isRender ? (
          <RenderController
            {...this.props}
            renderNextComponent={this.renderNextComponent}
          />
        ) : null;
      }
    };
  };
}

function CompA() {
  useEffect(() => {
    console.log('组件A挂载完成');
  }, []);
  return <div>组件 A </div>;
}
function CompB() {
  useEffect(() => {
    console.log('组件B挂载完成');
  }, []);
  return <div>组件 B </div>;
}
function CompC() {
  useEffect(() => {
    console.log('组件C挂载完成');
  }, []);
  return <div>组件 C </div>;
}

function CompD() {
  useEffect(() => {
    console.log('组件D挂载完成');
  }, []);
  return <div>组件 D </div>;
}
function CompE() {
  useEffect(() => {
    console.log('组件E挂载完成');
  }, []);
  return <div>组件 E </div>;
}

export default Demo;
