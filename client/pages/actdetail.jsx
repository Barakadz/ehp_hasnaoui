import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Topbar from '../components/topbar/topbar';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Breadcumbs from "@/components/breadcumbs/breadcumbs";
import Contact from "@/components/contact/contact";
import Preloader from "@/components/preloader/preloader";
import React, { useEffect } from 'react';
import Actualites from "@/components/actualites/actualites";
import  { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import BreadcumbsAct from "@/components/breadcumbs_act/breadcumbs";
import ActDetail from "@/components/actualites_detail/actdetail";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    if (id) {
      setItemId(id);
      console.log("Received ID:", id); // Add this line to log the ID
    }
  }, [id]);

  useEffect(() => {
    const handleLoad = () => {
      console.log('Window loaded');
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('preloader-deactivate');
      }
    };

    if (document.readyState === 'complete') {
      handleLoad(); // If window is already loaded, execute immediately
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // You can fetch new data based on the selected page
    // For example: fetchData(selected + 1);
  };
  return (<>
	<Head>
	<title>Actualités - EHPHASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>

 <Topbar/>
 <Navbar/>

<BreadcumbsAct/>
 
{id && <ActDetail id={id}/>}   
 
 <Footer/>
     </main>
</>
  );
}
