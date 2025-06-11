import { createContext, useContext } from "react";

export const UserContext = createContext();

export const Page3 = () => {
    const user = useContext(UserContext);
    return <h3>Welcome, my name is {user.name}!</h3>
}