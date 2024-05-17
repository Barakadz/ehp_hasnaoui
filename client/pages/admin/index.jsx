import Head from "next/head";
 import { Inter } from "next/font/google";
 
import React, { useEffect } from 'react';
import TopbarDashboard from "@/components/topbardashboard/top";
import SideBarDashboard from "@/components/sidebar/sidebar";
import CardDashboard from "@/components/card_dash/cardDash";
 
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
<div id="viewport">
 <SideBarDashboard/>
 <CardDashboard/>
 
 </div>

     </main>
</>
  );
}
