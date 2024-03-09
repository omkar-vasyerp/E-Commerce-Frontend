import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cartDetails, setCartDetails] = useState([]);
  const [token, setToken] = useState(null);
  const login = (newToken) => {
    setToken(newToken);
};

  return (


    <AppContext.Provider value={{ token, login,searchProduct, setSearchProduct, categoryId, setCategoryId,loading, setLoading ,cartDetails, setCartDetails}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}