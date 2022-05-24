
import React, {useState, useEffect} from 'react';
// import { useAsync } from "react-async"

function Login() {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const handleId = (e) => {
        setId(e.target.value)
    }
    
    const handlePw = (e) => {
        setPwd(e.target.value)
    }

    const onClickLogin = (e) => {
        console.log('click login')
    }

    useEffect(() => {
        //여기서는 async await 을 쓸 수 없다.
        fetch("http://localhost:8888/users")
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.map((user) => {
                setId(user.id);
                setPwd(user.password);
            })
        })
        .catch((error) => {
            console.error('실패:', error);
        });
    }, []);

    return (
        <div className='login'>
            <div className="module">
                <div className="block">
                    <input type="text" title="아이디 입력" id="login" name="login" placeholder="아이디를 입력해주세요" value={id} onChange={handleId} />
                </div>
                <div className="block">
                    <input type="password" title="패스워드 입력" id="ps" name="ps" placeholder="비밀번호를 입력해주세요" value={pwd} onChange={handlePw} />
                </div>
                <div className="block">
                    <button className='btn-login' onClick={onClickLogin}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
