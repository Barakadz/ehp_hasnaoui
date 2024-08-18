// contexts/AuthContext.js

import { createContext, useState } from 'react';

const AdminContext = createContext();

export const AuthProviderAdmin = ({ children }) => {
   const [userAdmin,setUserAdmin]=useState({username:"",password:"" });
 

  return (
    <AdminContext.Provider value={{ userAdmin,setUserAdmin  }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;



 