import { createContext, useContext, useState } from "react";

//Create Context
const AuthContext = createContext();

//Create auth provider
export const AuthProvider = ({ children }) => {
    //set global user state
    const [ user, setUser ] = useState(null);

    //To handle logout globally
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return(
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);