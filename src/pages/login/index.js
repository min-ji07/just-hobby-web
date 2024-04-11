function Login(){

    const onClick = () => {
        console.log('로그인')
    }
    return(
        <div className="wrap">
            <div className="login-form">
                <h1>logo</h1>
                <input type="text" placeholder="아이디(이메일주소) 입력"/>
                <input type="password" placeholder="비밀번호 입력"/>
                <div>
                    <p>아이디저장</p>
                </div>
                <a onClick={onClick}>로그인</a>
            </div>
        </div>
    )
}
export default Login;