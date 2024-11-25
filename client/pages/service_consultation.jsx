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
import PresentationService from "@/components/presentation_service_chirugie/presentationChirugie";
import SpecialiteComponent from "@/components/specialite/specialite";
import SpecialiteDescription from "@/components/specialite/specialiteDescription";
import Bloc from "@/components/type_bloc/bloc";
import Faq from "@/components/faq/faq";
import Services from "../components/services/service";
import Qalite from "@/components/qalite/qalite";
import ChatBubble from "@/components/tel/tel";
 
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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

  const faqsData = [
    {
      question: "Service de Consultation Générale",
      answer: "Consultez en urgence si vous avez des symptômes graves tels que des douleurs thoraciques, une perte de conscience, des difficultés respiratoires, des douleurs abdominales sévères, ou toute blessure grave.",
    },
    {
      question: "Que faire en cas de problème dermatologique urgent ?",
      answer: "Pour des éruptions sévères, infections cutanées ou lésions suspectes (par exemple, des grains de beauté modifiés), consultez rapidement un dermatologue.",
    },
    {
      question: "Comment se déroule une consultation dermatologique ?",
      answer: "Le dermatologue réalise un examen visuel de votre peau et peut effectuer des tests comme des biopsies pour poser un diagnostic précis. Le traitement dépend de la pathologie, pouvant inclure des crèmes, médicaments, ou interventions chirurgicales pour les lésions graves.",
    },
   
  ];

const servicesData = [
  {
      title: "Consultation Médicale Générale",
      description:
      `
•	Bilan de santé : Suivi de votre état général et prévention des maladies.
•	Soins des pathologies courantes : Infections, douleurs, maladies bénignes.
•	Suivi des pathologies chroniques : Diabète, hypertension, etc.
•	Conseils préventifs : Vaccination, nutrition, dépistage.
      `,
      logo:"/chirurgie__i.png"
        },
  {
      title: "Urgences Médicales",
      description:
      `
•	Soins urgents : Prise en charge rapide des accidents, douleurs aiguës, fièvre, etc.
•	Orientation vers des spécialistes : En cas de besoin, vous êtes dirigé vers le bon spécialiste.

       `,    logo:"/chirurgie__i.png"
        },
  
        {
            title: "Dermatologie",
            description:
            `
       •	Examen de la peau : Diagnostic des éruptions, taches, et autres anomalies cutanées.
•	Traitement des affections cutanées : Acné, eczéma, infections, etc.
•	Suivi des cancers de la peau : Dépistage et prise en charge des lésions suspectes.

            `,   logo:"/chirurgie__i.png"
              } 
];

  return (<>
	<Head>
	<title>  Service Consultation Générale- EHPHASNAOUI</title>
	<meta name="description" content="Ehp hasnaoui, Hopital Privée Hasnaui,Hasnaoui Private Hospital, Ehp-hasnaoui" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/logozoom.PNG" />
  <script src="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/main.min.js
"></script>
<link href="
https://cdn.jsdelivr.net/npm/icofont@1.0.0/dist/icofont.min.css
" rel="stylesheet"/>
  </Head>
  <main style={{padding:'0'}}>
 <Preloader/>

 <Topbar/>
 <Navbar/>
 <Breadcumbs text="Service de Consultation Générale"/>

 <PresentationService title="Présentation de Service Service de Consultation Générale" description="Notre service de consultation générale propose une prise en charge complète pour les soins de santé quotidiens et urgents. Nos médecins généralistes assurent un suivi personnalisé, vous offrant des consultations pour des maladies courantes, des bilans de santé, des vaccinations, ainsi que des conseils préventifs. En cas d'urgence, nous offrons également un accès rapide aux soins nécessaires.
 De plus, nous mettons à votre disposition des consultations spécialisées, notamment en dermatologie, pour traiter toutes les affections cutanées, qu'elles soient bénignes ou plus graves.
 " />
  
 
 <Services services={servicesData} />
 <Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
