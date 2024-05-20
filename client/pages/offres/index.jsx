import Head from "next/head";
 import { Inter } from "next/font/google";
 
import React, { useEffect } from 'react';

import SideBarDashboard from "@/components/sidebar/sidebar";
import AdminOffres from "@/components/adminoffres/adminOffres";
   
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    
  }, []);
  return (<>
	<Head>
	<title>Offres d'emplois</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
  <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
  </Head>
  <main style={{padding:'0',background:"#f5f5f5"}}>
<div id="viewport">
 <SideBarDashboard/>
 
 
 <AdminOffres/>
  </div>

     </main>
</>
  );
}
