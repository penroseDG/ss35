import React, { Component } from 'react';
import Children_Comp from './Children_Comp';
interface ParentState {
  parentName: string;
}
class Parent_Comp extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state với tên của bản thân
    this.state = {
      parentName: 'PENROSEdg'
    };
  }
  render() {
    return (
      <div>
        <h1>HỌ VÀ TÊN CHA: {this.state.parentName}</h1>
        <Children_Comp childName="SUPER MAC SIP NGOAI QUAN" />
      </div>
    );
  }
}

export default Parent_Comp;
