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
      question: "Comment préparer un prélèvement sanguin pour mes analyses ?",
      answer: "Selon le type d'analyses prescrites, il peut être nécessaire de jeûner pendant une période de 8 à 12 heures avant le prélèvement. Votre médecin ou notre équipe vous informera des instructions spécifiques à suivre avant votre visite.",
    },
    {
      question: "Combien de temps faut-il pour obtenir les résultats de mes analyses ?",
      answer: "Le délai de résultats varie selon les tests effectués. En général, les résultats des analyses courantes sont disponibles dans un délai de 24 à 48 heures. Pour certains tests plus complexes, cela peut prendre plus de temps.",
    },
    {
      question: "Est-ce que mes résultats d'analyses sont confidentiels ?",
      answer: "Oui, la confidentialité de vos résultats d'analyses est notre priorité. Toutes les données médicales sont traitées de manière sécurisée, conformément à la réglementation en vigueur sur la protection des données de santé.",
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
	<title>Laboratoire d'Analyses Médicales - EHPHASNAOUI</title>
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
 <Breadcumbs text="Laboratoire d'Analyses Médicales"/>

 <PresentationService title="Présentation de Laboratoire d'Analyses Médicales" description="Notre laboratoire d'analyses médicales offre des services de diagnostic de haute qualité, basés sur des technologies de pointe et un suivi rigoureux. Nous sommes spécialisés dans l’analyse de divers paramètres biologiques afin d’aider à la détection précoce de pathologies, au suivi de traitements et à la gestion globale de la santé des patients."/>
  
 
 <Services services={servicesData} />
 <Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
