import React, { useState } from 'react'

export default function Textarea() {
    const [feedback, setFeedback] = useState<string>("");

    const handleChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        console.log(e.target.value);
    }
  return (
    <div> Textarea
      <textarea onChange={handleChange} name="" id="">
        
      </textarea>
    </div>
  )
}