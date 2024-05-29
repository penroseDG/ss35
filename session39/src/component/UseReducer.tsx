import React, { useReducer, useState } from 'react'

export default function UseReducer() {
    // const [count,setCount]=useState<number>(0);
    // let initial={
    //   product:{},
    //   product:[],
    //   isLoading:false,
    // }
    const reducer = (state: any, action: any) => { // đặt tên gì cx đc
        switch (action) {
            case 'increase':
                return state + 1

            default:
                return state;
        }
    }
    const initialCount = 0;
    // destrucoring
    const [state, dispatch] = useReducer(reducer, initialCount);
    const handleClick = () => {
        dispatch('increase');
    }
    return (
        <div>
            {/* 
           đây là 1 hooks không phải 1 hàm 
           dùng để quản lí các state phức tạp 
           đối với những state đơn giản thì có dùng useReducer được không ? 
           --> được 
           nhưng mà các state đơn giản thì nên dùng useState    
           + đầu vào useReducer nhận vào 2 tham số 
             + tham số đầu tiên là 1 cái hàm reducer - đặt tên gì cũng được  
             + tham số thứ 2 là 1 cái giá trị khởi tạo
           nắm được luồng chạy của useReducer bài học sau sẽ học redux (thư viện quản lí state)
        */}
            <p>{state}</p>
            <button onClick={handleClick}>tăng</button>
        </div>
    )
}

