// contexts/AuthContext.js

import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [userData,setUserData]=useState({FirstName:"",LastName:"",DateNaissance:"",NumeroTel:"",DateRendezVous:"",Heure:"",Email:"",NumeroCni:"",NumeroSecuriteSociale:"",Services:"",Heure:"",OTP:"",otpuser:""});
 

  return (
    <AuthContext.Provider value={{ userData,setUserData  }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;



 