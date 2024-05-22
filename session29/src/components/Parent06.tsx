import React, { Component } from 'react';
import Child06 from './Child06';
interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}
interface ParentState {
  users: User[];
}
class Parent06 extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state với mảng các đối tượng user
    this.state = {
      users: [
        { id: 1, name: 'dao tri duc ', address: 's402 smct, Thành phố Hanoi', email: 'duc@gmail.com' },
        { id: 2, name: 'nguye xuan quang', address: '456 Đường halol, Thành phố HCM', email: '23fg@gmail.com' },
        { id: 3, name: 'nguyen quang bé', address: '789 Đường D_F_G, Thành phố HN', email: 'buoito@gmail.com' }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child06 users={this.state.users} />
      </div>
    );
  }
}

export default Parent06;
