import React, { useContext } from "react";
// import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";
import { UserContext } from "Components/Context";
import { Link } from 'react-router-dom';


const Div = styled.div`
    width:100%;
    height:100%;
    color:black;
    font-size:2rem;
    margin:10px;
`;

const Links = styled(Link)`
    font-size:3rem;
    color:black;
`;

const Btn = styled.button`
    margin:1rem;
`;

const Login = () => {
    const { userLogIn } = useContext(UserContext)
    return (
        <>
            <Div>LoginPage</Div>
            <Btn onClick={userLogIn}>
                <Links to="/">this is login test</Links>
            </Btn>
        </>
    )
}
export default Login;