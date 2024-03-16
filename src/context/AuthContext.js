
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const storedToken = localStorage.getItem('authToken');
    const storedUserId = localStorage.getItem('userId');
  const [token, setToken] = useState(storedToken || null);
  const[userId,setUserId]=useState(storedUserId || null);

  const login = (newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
  };

  const register = (newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
  };
  
  const user =(userId)=>{
    localStorage.setItem('userId',userId);
    setUserId(userId);
  }

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
  };
    return (
        <AuthContext.Provider value={{ login,user, logout, register, token ,userId,setUserId}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
