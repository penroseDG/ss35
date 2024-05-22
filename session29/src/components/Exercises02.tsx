import React, { Component } from 'react';
interface State {
        id : string;
        name : string;
        date : string;
        address : string; 
}
class Exercise02 extends Component<{} , State>{
  constructor(props: {}) {
    super(props);
    // Khởi tạo state với các thông tin cá nhân
    this.state = {
      id: '001',
      name: 'Dao Tri Duc',
      date: '16/12/2004',
      address: 'Smart city , HaNoi , Vietnam'
    };
  }
  render() {
    // Truy cập và render dữ liệu từ state
    return (
      <div>
        <h1>Thông tin cá nhân</h1>
        <p>ID: {this.state.id}</p>
        <p>Tên: {this.state.name}</p>
        <p>Ngày sinh: {this.state.date}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    );
  }
}

export default Exercise02;
