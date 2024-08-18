// pages/_error.js
import Notfound from '@/components/404/404';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import Topbar from '@/components/topbar/topbar';
import React from 'react';

const ErrorPage = () => {
  return (<>
     <Topbar/>
     <Navbar/>
    <Notfound/>
<Footer/>
  </>
 
  );
};

export default ErrorPage;
