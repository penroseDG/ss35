import React from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Login from './component/login/Login'
import B1 from './component/baitap/B1'
import Sidebar from './component/bai2/Sidebar'
import Dashboard from './component/bai2/Dashboard'
export default function App() {
  return (
    <div> App 
      <Header></Header>
      <Main></Main>
      <Login/>
      <B1></B1>

      <Sidebar></Sidebar>
      <Header></Header>
      <Dashboard></Dashboard>
      </div>
  )
}

