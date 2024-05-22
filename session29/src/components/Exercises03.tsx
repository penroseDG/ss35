import React, { Component } from 'react';
interface User {
    id : number;
    name : string;
    address : string;
}
interface Props{

}
interface State{
    users: User[];
}
class Exercise03 extends Component<Props,State> {
  constructor(props:User) {
    super(props);
    // Khởi tạo state với mảng users
    this.state = {
      users: [
        { id: 1, name: 'Dao tri duc', address: '10 Đường NGuyen tRai, Thành phố HaNoi' },
        { id: 2, name: 'DUccute', address: '456 Đường BInh thanh, Thành phố Ho Chi Minh' },
        { id: 3, name: 'Ducvip1612', address: '69 Đường Le Loi, Thành phố Thai BInh ' }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Danh sách người dùng</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Địa chỉ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercise03;
