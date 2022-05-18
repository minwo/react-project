
import React from 'react';

function Login() {
    return (
        <div className='login'>
            <div className="module">
                <div className="block">
                    <input type="text" title="아이디 입력" />
                </div>
                <div className="block">
                    <input type="text" title="패스워드 입력" />
                </div>
                <div className="block">
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
