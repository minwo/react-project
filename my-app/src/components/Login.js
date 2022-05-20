
import React, {useState} from 'react';
import { useAsync } from "react-async"

const loadCustomer = async ({ id }, { password }) => {
    const res = await fetch("http://localhost:8888/users");
    
    if(res.ok){
        const users = await res.json();
        const user = users.find((user) => user.id === id )
    }
    // if (!res.ok) throw new Error(res)
    // return res.json()
  }

function Login() {
    const { data, error, isLoading } = useAsync({ promiseFn: loadCustomer, id: 1 })
    console.log(JSON.stringify(data, null, 2))
    // console.log(data)
    // if (isLoading){
    //     console.log(isLoading,'124124')
    //     return "Loading..."
    // }
    // if (error) return `Something went wrong: ${error.message}`
    // if (data);

    // const [userId, setUserId] = useState();
    // const [pass, setPass] = useState();
    
    // function submit(){
    //     console.log(setUserId,setPass);
    // }

    return (
        <div className='login'>
            <div className="module">
                <div className="block">
                    <input type="text" title="아이디 입력" id="login" name="login" placeholder="아이디를 입력해주세요"  />
                    {/* value={{userId}} onChange={(e) => setUserId(e.target.value)} */}
                </div>
                <div className="block">
                    <input type="password" title="패스워드 입력" id="ps" name="ps" placeholder="비밀번호를 입력해주세요" />
                    {/* value={{pass}} onChange={(e) => setPass(e.target.value)} */}
                </div>
                <div className="block">
                    <button className='btn-login'>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
