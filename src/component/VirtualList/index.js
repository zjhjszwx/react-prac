import React, { Component } from 'react';
import Item from './Item';

const height = 60;
const bufferSize = 5;
const windowHeight = 300;
class VirtualizedList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      startOffset: 0,
      endOffset: 0,
      visibleData: [],
    };

    this.data = new Array(100000).fill(true);
    this.startIndex = 0;
    this.endIndex = 0;
    this.scrollTop = 0;
  }

  componentDidMount() {
    // 计算可以显示的个数
    this.visibleCount = Math.ceil(windowHeight / height);
    // 计算endIndex
    this.endIndex = this.startIndex + this.visibleCount;
    // 显示初始化渲染的数据
    this.updateVisibleData();
    this.myRef.current && this.myRef.current.addEventListener('scroll', this.handleScroll, false);
  }

  handleScroll = () => {
    let scrollTop = this.myRef.current.scrollTop;
    if (scrollTop > this.scrollTop) {
      this.startIndex = Math.ceil(scrollTop / height);
      this.endIndex = this.startIndex + this.visibleCount;

      this.updateVisibleData(scrollTop);
    }
  };

  updateBoundaryIndex(scrollTop) {
    scrollTop = scrollTop || 0;
    //用户正常滚动下，根据 scrollTop 找到新的锚点元素位置
  }

  updateVisibleData(scrollTop) {
    // 显示的数据
    const visibleData = this.data.slice(this.startIndex, this.endIndex);
    // 偏移量
    const endOffset = (this.data.length - this.endIndex) * height;

    this.setState({
      startOffset: scrollTop,
      endOffset: endOffset,
      visibleData,
    });
  }

  render() {
    const { startOffset, endOffset, visibleData } = this.state;

    console.log('[  ] >', startOffset, endOffset);

    return (
      <div ref={this.myRef} style={{ height: windowHeight, overflow: 'scroll' }}>
        <div
          style={{
            paddingTop: `${startOffset}px`,
            paddingBottom: `${endOffset}px`,
            height: windowHeight,
            background: '#eee',
          }}
        >
          {visibleData.map((item, index) => {
            return (
              <Item
                // cachePosition={this.cachePosition}
                key={this.startIndex + index}
                index={this.startIndex + index}
              />
            );
          })}
        </div>
        {/* <div>
          {this.data.map((item, index) => {
            return (
              <Item
                // cachePosition={this.cachePosition}
                key={this.startIndex + index}
                index={this.startIndex + index}
              />
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default VirtualizedList;
