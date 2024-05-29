import { useRef, useState , useEffect } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0);
    let index = 0;
    const refCurrent = useRef<HTMLInputElement>(null); // ref = {}
    refCurrent.current?.focus(); // toán tử optinal change 
    useEffect(()=>{
      refCurrent.current?.focus();
      
    },[])
    /*
      useRef là 1 hàm nhận vào tham số là giá trị khởi tạo truyền vào
      useRef() trả về 1 đối tượng là 1 object, bên trong object này
      sẽ có 1 key (current) với giá trị 
      khi mỗi lần component re-render thì UseRef sẽ không tạo ra tham chiếu mới 
      khi muốn foucs vào ô input khi muốn nhập dữ liệu 
     */
    console.log("gia tri cua ref", refCurrent);
    const handleClick = () => {
        index++;
        console.log("gia tri index khi click", index);
        setCount(count + 1);
    }
  return (
    <div>UseRef
        <p>gia tri count: {count}</p>
        <button onClick={handleClick}>click</button>
        <input 
        ref={refCurrent}    
        type="text" placeholder="nhap email"/>
    </div>
  )
}