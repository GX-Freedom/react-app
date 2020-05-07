import React, { useContext } from "react";
import { UserContext } from "Components/Context";
// import HomePresenter from "./HomePresenter"
import { Link } from 'react-router-dom';

import styled from "styled-components";


const Div = styled.div`
    width:100%;
    height:100%;
    color:black;
    font-size:2rem;
`;

const Login = styled(Link)`
    list-style:none;
    color:black;
    padding:3px;
    border-bottom:2px solid blue;
`;
const LogOutBtn = styled.button`
    font-size:1rem;
    cursor: pointer;

`;


const Home = () => {
    const { user: { name, loggedIn }, userLogOut } = useContext(UserContext)
    // const context = useContext(UserContext)
    // console.log(UserContext)
    // console.log(context)
    // console.log(name)

    return (
        <>
            <Div>
                <div>Home</div>
                <div>
                    {loggedIn ? name : "your"}  {loggedIn ? <LogOutBtn onClick={userLogOut}>LogOut</LogOutBtn> : <Login to="/login">LogIn</Login>}
                </div>
            </Div>
        </>
    );
}

export default Home