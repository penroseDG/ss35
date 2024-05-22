import { useState } from 'react'

export default function UseState() {
    const [count,setCount]=useState<number>(1);
    /* 
        hook là những cái hàm thôi,khi dùng hàm để ý đầu vào của hàm, đầu ra trả về kết quả gì?
        useState dùng để quản lý trạng thái của dữ liệu
        useState trả về 1 cái mảng có 2 phần tử
            + phần tử đầu tiên là giá trị truyền vào useState
            + phần tử thứ 2 là 1 cái function
        destructoring để hứng lấy giá trị
        khi cập nhập lại trạng thái của dữ liệu (setCount) thì component re-render
    */
    // const result = useState(0);
    // const [c,d] = useState(2);
    // console.log(c);
    // let arr=[5,6];
    // let [a,b]=arr;
    const increase=()=>{
        setCount(count+1)
        // batch update
        setCount(ab=>ab+1)
        setCount(a=>a+2)
        setCount(B=>B+3)
    }
  return (
    <div>
      <p>giá trị {count}</p>
      <button onClick={increase}>tăng</button>
      <button onClick={()=>setCount(count-1)}>giam</button> {/* cách gọi fun nhanh hơn */}
    </div>
  )
}