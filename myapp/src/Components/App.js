import React from 'react';
import Router from './Router';
import GlobalStyled from './GlobalStyle';
import UserContextProvider from './context';


function App() {
    return (
        <UserContextProvider>
            <Router />
            <GlobalStyled />
        </UserContextProvider>
    );
}

export default App;
