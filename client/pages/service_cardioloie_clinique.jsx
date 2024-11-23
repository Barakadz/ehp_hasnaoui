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
      question: "Qu'est-ce qu'un électrocardiogramme (ECG) ?",
      answer: "L'ECG est un examen qui enregistre l'activité électrique de votre cœur. Il permet de détecter des problèmes de rythme cardiaque, des signes d'attaque cardiaque ou d'autres anomalies cardiaques. Il est rapide, non invasif et indolore.",
    },
    {
      question: "Pourquoi ai-je besoin d'un Holter ECG ?",
      answer: "Le Holter ECG est utilisé pour surveiller l’activité électrique de votre cœur pendant 24 à 48 heures. Cela permet de détecter des arythmies ou d'autres anomalies du rythme cardiaque qui peuvent ne pas être présentes lors d'un ECG classique.",
    },
    {
      question: "Qu'est-ce qu'une échographie Doppler cardiaque ?",
      answer: "Une échographie Doppler cardiaque utilise des ondes sonores pour visualiser et évaluer le flux sanguin dans votre cœur. Elle permet de détecter des problèmes liés aux valves cardiaques, aux parois cardiaques, ou aux artères coronaires.",
    },
    {
        question: "À quoi sert l’épreuve d’effort ?",
        answer: "L’épreuve d'effort évalue la réponse de votre cœur lors d’un effort physique contrôlé, souvent sur un tapis roulant ou un vélo ergométrique. Elle permet de détecter des signes de maladies cardiaques, notamment l'angine de poitrine ou les troubles du rythme.",
      },
      {
        question: "Pourquoi dois-je passer une échographie transœsophagienne sous anesthésie générale ?",
        answer: "Cet examen est effectué sous anesthésie générale pour obtenir des images précises de votre cœur en insérant une sonde par l'œsophage, ce qui permet une meilleure visualisation des structures cardiaques, notamment dans le cas de maladies des valves cardiaques ou de la recherche de caillots.",
      },
  ];

const servicesData = [
  {
      title: "Électrocardiogramme (ECG)",
      description:
      `
  Examen rapide et indolore permettant d'enregistrer l'activité électrique du cœur pour détecter des anomalies du rythme cardiaque.
      `,
      logo:"/chirurgie__i.png"
        },
  {
      title: "Échographie Doppler vasculaire",
      description:
      `
Cet examen non invasif permet d'évaluer la circulation sanguine dans les vaisseaux, notamment pour détecter des obstructions ou des anomalies du flux sanguin. `,    logo:"/chirurgie__i.png"
        },
  {
      title: "Échographie Doppler cardiaque adulte",
      description:
      `
   Utilisation du Doppler pour visualiser le cœur et évaluer son fonctionnement, en particulier pour diagnostiquer des problèmes des valves cardiaques, de la fonction ventriculaire ou des anomalies du flux sanguin.
      `,   logo:"/chirurgie__i.png"
        },
        {
            title: "Holter tensionnel",
            description:
            `
        Surveillance ambulatoire de la pression artérielle sur 24 heures pour détecter l'hypertension ou des variations anormales de la pression.     `,   logo:"/chirurgie__i.png"
              },
              {
                title: "Holter ECG",
                description:
                `
          Enregistrement continu de l'activité électrique du cœur sur 24 à 48 heures pour diagnostiquer des arythmies ou des anomalies du rythme cardiaque qui ne seraient pas détectées lors d'un ECG classique
                 `,   logo:"/chirurgie__i.png"
                  },
                  {
                    title: "Échographie Doppler pédiatrique",
                    description:
                    `
Examen non invasif permettant de suivre l'état des vaisseaux et du cœur chez les enfants, notamment en cas de malformations cardiaques congénitales ou de pathologies vasculaires.
                     `,   logo:"/chirurgie__i.png"
                      },
                      {
                        title: "Épreuve d'effort",
                        description:
                        `
Test permettant d'évaluer la réponse du cœur à l'effort physique et de détecter des anomalies cardiaques sous stress, comme l'angine de poitrine ou des troubles du rythme.                         `,   logo:"/chirurgie__i.png"
                          },
                          {
                            title: "Échographie d'effort",
                            description:
                            `
    Combinaison d'une épreuve d'effort avec une échographie cardiaque pour analyser le fonctionnement du cœur sous contrainte physique et évaluer la fonction cardiaque en temps réel.                       `,   logo:"/chirurgie__i.png"
                              },
                              {
                                title: "Échographie transœsophagienne sous anesthésie générale (AG)",
                                description:
                                `
       Cet examen permet d’obtenir des images détaillées du cœur en introduisant une sonde par l'œsophage, sous anesthésie générale, pour des indications spécifiques comme la recherche de caillots ou des anomalies des valves cardiaques.  `,   logo:"/chirurgie__i.png"
                                  },
];

  return (<>
	<Head>
	<title>  Service de Cardiologie Clinique- EHPHASNAOUI</title>
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
 <Breadcumbs text="Service de Cardiologie Clinique"/>

 <PresentationService title="Présentation du Service Cardiologie Clinique" description="Le service de cardiologie clinique de notre hôpital est dédié à l'évaluation, au diagnostic et au traitement des maladies cardiovasculaires. Nos cardiologues utilisent des technologies avancées et des examens spécialisés pour détecter, surveiller et traiter les pathologies cardiaques et vasculaires, qu'elles soient aiguës ou chroniques.
Nous offrons un large éventail de prestations, allant des bilans cardiaques préventifs aux examens diagnostiques pour des patients présentant des symptômes tels que des douleurs thoraciques, des palpitations ou des problèmes de circulation.
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
