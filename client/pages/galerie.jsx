import Head from "next/head";
import { Inter } from "next/font/google";
import Topbar from '../components/topbar/topbar';
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import Preloader from "@/components/preloader/preloader";
import React, { useEffect,useState } from 'react';
 import MyLightbox from "@/components/galerie/galerie";
import axios from "axios";
 
const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const images_pediateries = [
    '1I9A0113.JPG',
    '1I9A0114.JPG',
    '1I9A0115.JPG',
    '1I9A0117.JPG',
    '1I9A0114.JPG',

     ];
     const images_saleOperatoires=[
      'tcrrdx.JPG',
      'tygh.JPG',
      '1I9A0091.JPG',
      'IMG_4779.JPG'
     ]
     const images_sterilisation=[
      'sqsq.jfif',
      'ssza.jfif',
      'IMG_0475.JPG',
      'yuu.jfif',
      'ybu.jfif',
      'tcr.jfif'
     ]
     const images_laboratoires=[
      'opop.jfif',
      'IMG_9434.JPG',
      'IMG_9435.JPG',
      'IMG_9441.JPG',
      'IMG_9435.JPG',
      'IMG_9443.JPG'
     ]
     const images_imageries=[
      'sqdp.JPG',
      'IMG_0181.JPG',
      'IMG_9449.JPG',
      'IMG_9451.JPG',
      'IMG_9454.JPG',
      'IMG_9458.JPG',
      'IMG_9475.JPG'
     ]
     const images_hospitalisation=[
      '1I9A0072.JPG',
      '1I9A0074.JPG',
      '1I9A0075.JPG',
      '1I9A0076.JPG',
      '1I9A0082.JPG',
      '1I9A0083.JPG',
      '1I9A0095.JPG',
      '1I9A0096.JPG',
      '1I9A0097.JPG',
      '1I9A0103.JPG',
      '1I9A0112.JPG'
     ]

     const images_urences=[
      'IMG_4797.JPG',
      'IMG_4787.JPG',
      'IMG_4788.JPG',
      'IMG_4789.JPG',
      'IMG_4793.JPG',
      'IMG_4795.JPG'

     ]
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
  useEffect(() => {

axios.get('https://www.ehp-hasnaoui.com/api/galerie')
.then(response => {
  setData(response.data);
  setLoading(false);
  console.log(JSON.stringify(data))
})
.catch(error => {
  setError(error);
  setLoading(false);
});
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
 // Group images by type
 const imagesByType = data.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item.image);
  return acc;
}, {});
    // Extract unique types
    const uniqueTypes = Array.from(new Set(data.map(item => item.type)));

  return (<>
	<Head>
	<title>Galerie - EHPHASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>

 <Topbar/>
 <Navbar/>
 
      {uniqueTypes.map((type, index) => (

<MyLightbox key={index} images={imagesByType[type]}  title={type}/>
         ))}


 <Footer/>
     </main>
</>
  );
}
