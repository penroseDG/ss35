import React,{useState} from 'react'

export default function BT1(){
    
    const [name,setName] = useState<string>("hoangtumuadong");
    return (
        <div>
      {name}
    </div>
  )
}
