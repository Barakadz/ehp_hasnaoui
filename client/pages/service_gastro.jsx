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
      question: "Quels sont les avantages de la cardiologie interventionnelle ?",
      answer: "Les procédures interventionnelles sont moins invasives, ce qui réduit les risques de complications et permet des temps de récupération plus courts. Elles sont souvent réalisées sous anesthésie locale avec sédation, offrant un confort optimal aux patients.",
    },
    {
      question: "Comment se préparer pour une intervention cardio-vasculaire ?",
      answer: "La préparation inclut un bilan pré-opératoire complet, comprenant des examens cliniques et des consultations spécialisées pour évaluer l'état de santé général du patient. Il est important de suivre les instructions spécifiques fournies par l'équipe médicale, telles que les ajustements de médicaments et les restrictions alimentaires.",
    },
    {
      question: "Quelles sont les options de suivi post-opératoire ?",
      answer: "Après l'intervention, un suivi régulier est essentiel pour garantir une récupération optimale. Cela inclut des consultations de contrôle, des examens d'imagerie, et des programmes de rééducation cardiovasculaire. Notre équipe de soins infirmiers spécialisés est disponible pour fournir un soutien continu et répondre à toutes les questions ou préoccupations des patients.",
    },
  ];

const servicesData = [
  {
      title: "Cardiologie Interventionnelle",
      description:
      `
   Cathétérisme Cardiaque et Angioplastie Coronaire :
Acquisition par Syngo Angio Package : Le système Syngo Angio permet une visualisation détaillée et précise des artères coronaires, ce qui est crucial pour diagnostiquer et traiter les obstructions. Cette technologie avancée améliore la précision des interventions et réduit le risque de complications.
Mesure FFR par Sensis Vibe : La mesure de la réserve de flux fractionnaire (FFR) aide à déterminer la sévérité des sténoses coronariennes. Cette technique permet aux cardiologues de décider de manière plus précise quand une angioplastie ou un stent est nécessaire, optimisant ainsi les résultats pour les patients.

      `,
      logo:"/chirurgie__i.png"
        },
  {
      title: "Procédures Hybrides",
      description:
      `
Cardiologie
Procédure TAVI (Remplacement Valvulaire Aortique par Transcathéter) : Cette procédure mini-invasive permet de remplacer une valve aortique défectueuse sans avoir recours à une chirurgie à cœur ouvert. C'est particulièrement bénéfique pour les patients à haut risque chirurgical.
Fermeture de l’Auricule Gauche : Pour les patients souffrant de fibrillation auriculaire, cette intervention réduit le risque d'accidents vasculaires cérébraux en fermant l'auricule gauche du cœur, où des caillots sanguins peuvent se former.
Procédure MitraClip : Utilisée pour traiter les fuites mitrales sévères, cette technique permet de réparer la valve mitrale par une approche percutanée, réduisant ainsi le besoin de chirurgie ouverte et favorisant une récupération plus rapide.
      `,    logo:"/chirurgie__i.png"
        },
  {
      title: "Procédures Endovasculaires",
      description:
      `
   EVAR (Réparation Endovasculaire de l'Aneurysme)
Fusion d’Image Scannographique : La technologie de fusion d'image permet de superposer des images scannographiques en temps réel, offrant une vue précise et détaillée des structures vasculaires. Cela facilite le placement des endoprothèses avec une grande précision.
Contrôle Après Déploiement : Après la mise en place de l'endoprothèse, un contrôle rigoureux est effectué pour s'assurer que l'anévrisme est correctement exclu de la circulation sanguine, minimisant les risques de complications post-opératoires.

      `,   logo:"/chirurgie__i.png"
        },
  
];

  return (<>
	<Head>
	<title>Service Cardio-Vasculaire - EHPHASNAOUI</title>
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
 <Breadcumbs text="Service Cardio-Vasculaire"/>

 <PresentationService title="Présentation du Service Cardio-Vasculaire" description="Le service de chirurgie cardio-vasculaire de l'Établissement Hospitalier Privé Hasnaoui est dédié à fournir des soins de pointe, combinant expertise médicale et technologies avancées pour le traitement des maladies cardiovasculaires. Notre objectif est de fournir des soins de qualité supérieure dans un environnement sûr et accueillant, où chaque patient bénéficie d'un suivi personnalisé et attentif."/>
  
 
 <Services services={servicesData} />
 <Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
