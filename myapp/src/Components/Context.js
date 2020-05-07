import React from "react";

export const UserContext = React.createContext();

UserContext.name = "KimJinYoung"

const data = {
    name: "KimJinYoung",
    age: "30",
    email: "kjy1670"
}

UserContext.data = data;

const UserContextProvider = ({ children }) => (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
);


export default UserContextProvider;