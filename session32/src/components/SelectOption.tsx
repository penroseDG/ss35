import React from 'react'

export default function SelectOption() {
const handleChange =( event: React.ChangeEvent<HTMLSelectElement>)=> {
       console.log(" giá trị người dùng chọn ", event.target.value)
}

  return (
    <div>SelectOption
      <select  onChange= {handleChange} name = "" id = "">
        <option value = ""> chọn 1 siêu nhân để dí </option>
        <option value = "1"> siêu nhân đỏ </option>
        <option value = "2"> siêu nhân xanh </option>
        <option value = "3"> siêu nhân vàng </option>
        <option value = "4"> siêu nhân hồng </option>
        <option value = "5"> siêu nhân đen </option>
      </select>
    </div>
  )
}
