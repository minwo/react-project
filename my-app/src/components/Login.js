
import React, {useState, useEffect} from 'react';
// import { useAsync } from "react-async"

function Login() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        //여기서는 async await 을 쓸 수 없다.
        fetch("http://localhost:8888/users")
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.map((user) => {
                console.log(user.id, user.password)
            })
            setBlogs(data);
        });
    }, []);
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
