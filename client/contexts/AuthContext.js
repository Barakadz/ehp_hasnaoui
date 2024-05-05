// contexts/AuthContext.js

import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [userData,setUserData]=useState({FirstName:"",LastName:"",DateNaissance:"",NumeroTel:"",Email:"",NumeroCni:"",NumeroSecuriteSociale:"",Services:""});
   

  return (
    <AuthContext.Provider value={{ userData,setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;



 