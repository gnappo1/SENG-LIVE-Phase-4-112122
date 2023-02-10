import { createContext, useState, useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const fetchCurrentUser = () => {
        return fetch("/authorized_user")
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((user) => {
                    setUser(user);
                });
            } else {
                res.json()
                .then((errorObj) => alert(errorObj.errors))
            }
        })
    }

    // const login = () => {}

    return (
        <UserContext.Provider value={{user, setUser, fetchCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}