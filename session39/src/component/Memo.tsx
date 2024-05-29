import React from 'react'

export default function Memo() {
  return (
    <div>
      Memo 
      {/*
     Memo không phải là 1 hooks 
     được gọi là HOC(higher order component) : hàm bậc cao 
     memo cơ chế hoạt động là sẽ đi kiểm tra xem trong component 
     có props nào thay đổi hay không ? nếu thay đổi thì 
     component sẽ re-render, còn không thì sẽ không re-render

      */}
    </div>
  )
}
