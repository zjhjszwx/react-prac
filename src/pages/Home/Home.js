import React, { Component } from 'react';
import CompositePattern from '../thinkReact/ComponentDesign/ClassExtend/index';

class Home extends Component {
  state = {
    count: 1,
  };

  render() {
    return (
      <div>
        <CompositePattern />
      </div>
    );
  }
}
export default Home;

// export default withTimer(Home)
