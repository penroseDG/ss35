import React,{useState} from 'react'
interface Product{
    id:number;
    name: string;
    price: number;
    quantity: number; 
};
export default function BT2() {
    const[prd , setPrd ] =useState<Product>(
        {
            id:1,
            name : "penrose",
            price : 300,
            quantity : 4        
            }
    );
          return (
    <div>s
    <p>Thong tin san pham</p>
    <p>ID: {prd.id}</p>
    <p>Name: {prd.name} </p>
    <p>Price: {prd.price}</p>
    <p>Quantity: {prd.quantity}</p>
    
    </div>
  )
}
