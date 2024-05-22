import { useState } from 'react'
interface User {
    email: string,
    username: string,
    password: string,
}
export default function FormAdvanced() {
    // cách bình thường 
    const [email, setEmail] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    // cách nâng cao xử lí tối ưu hơn 
    const [user, setUser] = useState<User>({
        email: "",
        username: "",
        password: "",
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        let name = event.target.name;
        console.log("gia tri name", name);
        console.log("gia tri value", value);
        setUser({...user,[name]: value});
    }
    console.log ("gia tri user",user);
    return (
        <div>
            FormAdvanced
            <div>
                <label htmlFor="">email</label>
                <input
                    name="email"
                    onChange={handleChange}
                    type="text" /><br />
                <label htmlFor="">username</label>
                <input
                    name="username"
                    onChange={handleChange}
                    type="text" /><br />
                <label htmlFor="">password</label>
                <input
                    name="password"
                    onChange={handleChange}
                    type="text" /><br />
                <label htmlFor="">confirmPassword</label>
                <input
                    name="confirmPassword"
                    onChange={handleChange}
                    type="text" /><br />
                <button>register</button>
            </div>
        </div>
    )
}
