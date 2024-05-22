import React, { Component } from 'react';
interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}
interface ChildProps {
  users: User[];
}
class Child06 extends Component<ChildProps> {
  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Child Component</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Address: {user.address}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Child06;
