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
      question: "Quels sont les avantages de la chirurgie mini-invasive?",
      answer: "Elle réduit les douleurs, les risques d'infection, et permet une récupération rapide.",
    },
    {
      question: "Comment puis-je préparer ma chirurgie ?",
      answer: "Une consultation pré-opératoire et des tests diagnostiques seront effectués pour garantir une préparation optimale.",
    },
  ];

const servicesData = [
  {
      title: "Chirurgie Endocrinienne",
      description:
          "Nous offrons des interventions spécialisées pour les pathologies de la thyroide et des glandes parathyroïdes. Nos procédures sont conçues pour gérer les troubles hormonaux et les anomalies glandulaires, visant à restaurer l'équilibre hormonal et améliorer la qualité de vie des patients",
 logo:"/chirurgieg.png"
        },
  {
      title: "Chirurgie de la Paroi",
      description:
          "Nos chirurgiens interviennent dans la réparation des hernies abdominales, une condition pouvant causer douleur et complications. Grâce à des techniques avancées, nous assurons une correction efficace des défauts de la paroi abdominale, réduisant les risques de récidive et favorisant une récupération rapide",
          logo:"/chirurgieg.png"
        },
  {
      title: "Chirurgie Oncologique",
      description:
          "Nous proposons des traitements spécialisés pour les cancers, utilisant des approches chirurgicales adaptées à chaque type de cancer. Notre objectif est d'éliminer les tumeurs tout en préservant la fonction organique et en maximisant le confort du patient pendant le traitement",
          logo:"/chirurgieg.png"
        },
  {
      title: "Chirurgie Proctologique",
      description:
          "Nous traitons les affections de l'anus et du rectum, telles que les hémorroïdes, les fissures et les fistules, en utilisant des techniques modernes. Nos interventions visent à soulager les symptômes, corriger les troubles et améliorer la qualité de vie de nos patients de manière efficace et délicate",
          logo:"/chirurgieg.png"
        },
  {
      title: "Chirurgie Digestive",
      description:
          "Nous intervenons sur l'appareil digestif pour traiter diverses pathologies, des maladies inflammatoires aux troubles fonctionnels. Notre approche est centrée sur la restauration de la fonction digestive et le soulagement des symptômes, avec des techniques adaptées et des soins personnalisés.",
          logo:"/chirurgieg.png"
        },
  {
      title: "Chirurgie Métabolique et de l'Obésité",
      description:
          "Nous proposons des solutions chirurgicales pour la gestion de l'obésité et la perte de poids, comme la gastrectomie verticale ou le by-pass gastrique. Ces interventions aident nos patients à atteindre et maintenir un poids corporel sain, tout en améliorant leur bien-être général et leur qualité de vie",
          logo:"/chirurgieg.png"
        },
  {
      title: "Chirurgie Laparoscopique",
      description:
          "Nous utilisons des techniques mini-invasives pour réaliser diverses interventions chirurgicales. La chirurgie laparoscopique permet de pratiquer des procédures avec de petites incisions, réduisant la douleur post-opératoire, le risque d'infection et le temps de récupération, tout en offrant des résultats optimaux",
          logo:"/chirurgieg.png"
        },
];

  return (<>
	<Head>
	<title>Service chirugie - EHPHASNAOUI</title>
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
 <Breadcumbs text="Chirurgie Générale et Cælioscopique"/>

 <PresentationService title="Présentation du service Chirurgie Générale et Cœlioscopique" description="La chirurgie générale et coelioscopique à l'Établissement Hospitalier Privé Hasnaoui est conçue pour offrir des soins chirurgicaux de la plus haute qualité en alliant expertise médicale, technologie de pointe et environnement sécurisé. Notre équipe de chirurgiens spécialisés possède une grande expérience dans la réalisation de procédures complexes, garantissant une prise en charge optimale et personnalisée de chaque patient. Grâce à l'utilisation d'équipements modernes, notamment pour la cœlioscopie, nous sommes en mesure de réaliser des interventions minimales invasives, ce qui réduit la douleur post-opératoire et accélère la récupération"/>
  
 
 <Services services={servicesData} />
 <Bloc/>
<Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
