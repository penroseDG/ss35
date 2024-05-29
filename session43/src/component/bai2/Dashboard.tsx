import React from 'react';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat">
          <span>Total Sales</span>
          <h2>$2,456</h2>
        </div>
        <div className="stat">
          <span>Total Expenses</span>
          <h2>$3,326</h2>
        </div>
        <div className="stat">
          <span>Total Visitors</span>
          <h2>5,325</h2>
        </div>
        <div className="stat">
          <span>Total Orders</span>
          <h2>1,326</h2>
        </div>
      </div>
      <div className="content">
        <h1>Form Title</h1>
        <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
        <table>
          <thead>
            <tr>
              <th>Table Title</th>
              <th>Table Title</th>
              <th>Table Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum</td>
              <td>Morbi pretium</td>
              <td>Convallis eget</td>
              <td>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;