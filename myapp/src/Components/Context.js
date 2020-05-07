import React, { useState } from "react";

export const UserContext = React.createContext();


const data = {
    name: "KimJinYoung",
    age: "30",
    email: "kjy1670",
    loggedIn: false
}


const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "KimJinYoung",
        age: "30",
        email: "kjy1670",
        loggedIn: false
    });

    const userLogIn = () => setUser({ ...user, loggedIn: true })
    return (
        <UserContext.Provider value={{ user, userLogIn }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContextProvider;