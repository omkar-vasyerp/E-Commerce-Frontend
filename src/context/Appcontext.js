<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cartDetails, setCartDetails] = useState([]);
 

  return (


    <AppContext.Provider value={{ searchProduct, setSearchProduct, categoryId, setCategoryId,loading, setLoading ,cartDetails, setCartDetails}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
=======
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cartDetails, setCartDetails] = useState([]);
 

  return (


    <AppContext.Provider value={{ searchProduct, setSearchProduct, categoryId, setCategoryId,loading, setLoading ,cartDetails, setCartDetails}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
>>>>>>> f7b280795ef5d2ec9eae9cb39104668303c82095
}