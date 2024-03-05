import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  return (
    <AppContext.Provider value={{ searchProduct, setSearchProduct, categoryId, setCategoryId }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}