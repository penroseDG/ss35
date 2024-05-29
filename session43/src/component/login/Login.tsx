import './login.scss'
export default function Login() {
  return (
    /* muốn dùng scss thì phải cài npm i sass */
    
    <div className = 'login'>
        <div className='login-name'>
           <label htmlFor="">userName</label>
           <input className = "login-name__input" type="text" />    
         </div>
         <div className='login-password'>
           <label htmlFor="">password</label>
           <input type="text" />   
         </div>
    </div>
  )
}
