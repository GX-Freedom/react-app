import React, { useContext } from "react";
import { UserContext } from "Components/Context";
// import HomePresenter from "./HomePresenter"

import styled from "styled-components";


const Div = styled.div`
    width:100%;
    height:100%;
    color:black;
    font-size:2rem;
`;

const Home = () => {
    const { data: { name } } = UserContext
    const context = useContext(UserContext)
    console.log(UserContext)
    console.log(context)
    console.log(name)

    return (
        <>
            <Div>Home
                {name}
            </Div>
        </>
    );
}
export default Home