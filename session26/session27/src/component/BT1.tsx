import React from 'react'
interface Product {
    name: string,
    price: number,
    id: number,
}

export default function BT1() {
    // render dữ liệu đối với function component 
    let fullname: string = " minh thu ";
    let age: number = 25;
    let student = {
        name: "duc",
        age: 20,
        address: "hà nội",
    }
    let numbers: number[] = [1, 4, 7, 9];
    let students: string[] = ["thu", "ngoc", " lan ", "phuong"]
    let products: Product[] = [
        {
            name: "iphone XR",
            price: 5500,
            id: 1
        },
        {
            name: "iphone XS max",
            price: 7500,
            id: 2
        },
        {
            name: "iphone XS",
            price: 4500,
            id: 3
        },
        {
            name: "iphone X",
            price: 3500,
            id: 4
        }
    ]
    return (
        // <>
        // <div>
        //    Bài tập 1 
        // </div>
        // <div> 
        //    Bài tập 2 
        // </div>
        // </>
        <div>
            <p> bai tap 1 </p>
            <p> noi dung bai tap 1 </p>
            <p> Hiển thị full name : {fullname} năm nay {age}</p>
            <p> Ten {student.name} </p>
            <p> tuoi {student.age}</p>
            <p>{JSON.stringify(student)}</p>
            <p> hiển thị mảng (array)</p>
            <ul>
                {numbers.map((items, index, arr) => {
                    return <li key={index}> {items}</li>
                })}
            </ul>
            <ul>
                {students.map((items, index, arr) => {
                    return <li key={index}>{items}{index}{arr}</li>
                })}
            </ul>
            {
                /*
                STT   Name       Price   ID
                1     Iphone X   4500    3
                2     Iphone XR  5500    4
                */
            }
            <table border={3}>
                <thead>
                    <tr>
                      <td>STT</td>
                      <td>Name</td>
                      <td>Price</td>
                      <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
                {
                  products.map((a,b,c) =>{
                    return  <tr>
                                <td>{b+1}</td>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>{a.id}</td>
                            </tr> 
                  })
                }
            </table>
        </div>
        /* 
         khi return các element thì phải có thẻ fragment bọc bên ngoài 
         không thể hiển thị object 
        */
    )
}
