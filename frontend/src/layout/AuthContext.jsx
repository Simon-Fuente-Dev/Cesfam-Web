import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userName = localStorage.getItem('userName');
    const idCuenta = localStorage.getItem('idCuenta'); 

    if (userToken) {
      console.log("Estableciendo currentUser en AuthContext");
      setCurrentUser({ token: userToken, userName, id_cuenta: idCuenta });
    }
    setLoading(false); 
  }, []);

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('idCuenta'); 
    setCurrentUser(null);
  };

  const login = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('userToken', userData.token);
    localStorage.setItem('userName', userData.userName);
    localStorage.setItem('idCuenta', userData.id_cuenta); 
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
