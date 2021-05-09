import React from 'react'
import styled from 'styled-components'

const LoginMainDiv=styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`

const LoginButton=styled.button`
padding: 10px 20px;
    border-radius: 5px;
    background: #4485f5;
    color: white;
    /* font-size: 20px; */
    border: none;
`

const Login = () => {
    return (
        <LoginMainDiv>
            Login
            <form action="">
                <input type="email" placeholder="email" />
                <input type="password" name="" id="" />
                
            </form>
            <LoginButton type="submit">Login</LoginButton>
            New User? <a href="">Create Account</a>
        </LoginMainDiv> 
    )
}

export default Login
