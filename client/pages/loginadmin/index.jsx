import Head from "next/head";
 import { Inter } from "next/font/google";
 
import React, { useEffect } from 'react';
import LoginAdmin from "@/components/loginAdmin/loginadmin";
 
 
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    
  }, []);
  return (<>
	<Head>
	<title>EHP - HASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
 
  </Head>
  <main style={{padding:'0',background:"#f5f5f5"}}>
 
<LoginAdmin/>
     </main>
</>
  );
}
