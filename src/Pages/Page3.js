import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export const Page3 = () => {
    const user = useContext(UserContext); // use context

    return <h3>Welcome, my name is {user.name}!</h3>
}