import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from "styled-components";
import dotenv from "dotenv";

dotenv.config();


const Header = styled.header`
    width:100%;
    height:50px;
    z-index:100;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    text-align:center;
    justify-content:space-around;
    align-items:center;
    background-color:#00a8ff;
    box-shadow: 0px 3px 15px 3.5px #3c6382;

`;

const List = styled.ul`
    display:flex;
    width:100%;
    justify-content:space-around;
    list-style:none;
`;

const Item = styled.li`
   width:80px;
   height:50px;
   text-align:center;
   display:flex;
   align-items:center;
   justify-content:center;
   border-bottom: 3px solid ${props => props.current ? "#2f3542" : "none"};
   transition: border-bottom 0.3s ease-in-out;
`;

const Slink = styled(Link)`
    color:white;
    font-size:1.3rem;
`;


export default withRouter(({ location: { pathname } }) => (

    <Header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name="google-signin-client_id" content="594279705173-6n6pnsf3648uplr4gi6uoai4nmbsimeb.apps.googleusercontent.com"></meta>
        <List>
            <Item current={pathname === "/"}>
                <Slink to="/">Home</Slink>
            </Item>
            <Item current={pathname === "/Blabla"}>
                <Slink to="/Blabla">Blabla</Slink>
            </Item>
            {/* <Item current={pathname === "/tv"}>
                <Slink to="/tv">TV</Slink>
            </Item>
            <Item current={pathname === "/movie"}>
                <Slink to="/movie">movie</Slink>
            </Item>
            <Item current={pathname === "/search"}>
                <Slink to="/search">Search</Slink>
            </Item> */}
        </List>
    </Header>
));