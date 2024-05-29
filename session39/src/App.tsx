import React , {useCallback, useState} from 'react'
import UseRef from './component/UseRef'
import Header from './component/Header'
import Main from './component/Main'

export default function App() {
  const [active,setActive]=useState<boolean>(false);
  const [count,setCount]=useState<number>(0);
  const handleClick=()=>{
    setActive(!active);
    setCount(count+1);
  };
  const getIdProduct  = ()=>{

  };
  let result = useCallback (() => {
   const getIdProduct = () => {
   }
   return getIdProduct;
  },[])
  // console.log('conponent app re-render khi click');
  return (
    <div>
      {active ? <p>xin chào</p> : ''}
      <UseRef></UseRef>
      <Header count={count}></Header>
      <Main getIdProduct={getIdProduct}></Main>
      <button onClick={handleClick}>click active</button>
    </div>
  )
}