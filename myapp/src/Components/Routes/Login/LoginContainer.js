import React, { useContext } from "react";
// import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";
import { UserContext } from "Components/Context";
import { Link } from 'react-router-dom';
import SocialButton from 'Components/SocialButton'
import { OldSocialLogin as SocialLogin } from 'react-social-login'
import GitHubLogin from 'react-github-login';

import dotenv from "dotenv";

dotenv.config();

const Div = styled.div`
    display:flex;
    width:100%;
    height:100%;
    color:black;
    font-size:2rem;
    justify-content:center;
    align-items:center;
    text-align:center;
`;

const Links = styled(Link)`
    font-size:3rem;
    color:black;
`;

const Btn = styled.button`
    margin:0 auto;
    display:flex;
    align-items:center;
    &>i{
        font-size:1.5rem;
        
    }
`;

const SocalLoginIcon = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    &>i:first-child{
        cursor: pointer;
        font-size:2.5rem;
        background:#f0f0f0;
        border-radius:100%;
        padding:5px;
        color:black;
        opacity:0.7;
       
    }
    &>img:last-child{
        display:flex;
        align-items:center;
        cursor: pointer;
        width:2.5rem;
        background:#f0f0f0;
        border-radius:100%;
        opacity:0.7;
    }
    &:hover{
        &>*:hover{
            opacity:1;
            filter:blur(0px)
        }
        &>*{
            filter:blur(0.7px);
        }
    }
`;
const SocalBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

// const handleSocialLogin = (user) => {
//     console.log(user)
// }

// const handleSocialLoginFailure = (err) => {
//     console.error(err)
// }

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const handleSocialLogin = (user, err) => {
    console.log(user)
    console.log(err)
}

const Login = () => {
    const { userLogIn } = useContext(UserContext)
    return (
        <>
            <Div>LoginPage</Div>
            <div style={{ display: "flex", justifyContent: "cneter" }}>
                <Btn onClick={userLogIn}>
                    <Links to="/">
                        this is login test
                    </Links>
                    <i className="fas fa-sign-in-alt"></i>
                </Btn>
            </div>

            <SocalBox>
                <SocialButton
                    provider='github'
                    gatekeeper='http://localhost:3000'
                    appId="cd5ed66b8c4c3fabbcd0"
                    redirect='http://localhost:3000'
                // callback={handleSocialLogin}
                >
                    <SocalLoginIcon>
                        <i className="fab fa-github">
                            {/* <GitHubLogin clientId="cd5ed66b8c4c3fabbcd0"
                                onSuccess={onSuccess}
                                onFailure={onFailure} /> */}
                        </i>
                    </SocalLoginIcon>
                </SocialButton>

                <SocialButton
                    provider='google'
                    gatekeeper='http://localhost:3000'
                    appId="594279705173-6n6pnsf3648uplr4gi6uoai4nmbsimeb.apps.googleusercontent.com"
                    callback={handleSocialLogin}
                >
                    <SocalLoginIcon>
                        <img src="https://ps.w.org/google-site-kit/assets/icon-256x256.png?rev=2181376" className="g-signin2" data-onsuccess="onSignIn" />
                    </SocalLoginIcon>
                </SocialButton>
            </SocalBox>
        </>
    )
}
export default Login;