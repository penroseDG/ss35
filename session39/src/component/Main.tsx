import React, { memo } from 'react'

interface Props {
  getIdProduct: number; 
}
function Main(props: Props) {
  console.log(" gọi function ra!",props.getIdProduct);
  return (
    <div>
      
    </div>
  )
}
export default memo(Main);