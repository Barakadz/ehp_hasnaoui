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
      question: "À partir de quel âge un enfant peut-il consulter un pédiatre ?",
      answer: `Les consultations pédiatriques peuvent commencer dès la naissance. Il est important d'effectuer des visites régulières pour surveiller la croissance et la santé de votre enfant, ainsi que pour réaliser les vaccinations nécessaires.`
,
    },
    {
      question: "Qu'est-ce que la photothérapie et quand est-elle nécessaire ?",
      answer: `La photothérapie est un traitement qui utilise des lumières spécifiques pour traiter la jaunisse néonatale. Elle est utilisée lorsque le taux de bilirubine du bébé est trop élevé, ce qui peut causer des problèmes de santé.`,
    },
    {
      question: "Quand faut-il hospitaliser un bébé ?",
      answer: `L'hospitalisation peut être nécessaire si un bébé présente des complications à la naissance, des problèmes respiratoires, ou des maladies nécessitant une surveillance et des soins intensifs. Nos néonatologistes évaluent chaque situation pour déterminer le meilleur plan de soins.`,
    },
    {
      question: "Est-ce que la CPAP est utilisée pour tous les nouveau-nés prématurés ?",
      answer: `Non, la CPAP est utilisée uniquement lorsque le bébé présente des difficultés respiratoires et que des méthodes supplémentaires sont nécessaires pour l’aider à respirer correctement. Ce traitement est adapté en fonction de l’état de santé de chaque enfant.
      `,
    },
    {
        question: "Quelles sont les vaccinations administrées à la naissance ?",
        answer: `Les premières vaccinations à la naissance incluent principalement l’hépatite B, et parfois d'autres selon les recommandations locales ou les conditions spécifiques du nourrisson`,
      },
      {
        question: "Est-ce que le BiliCheck est douloureux pour le bébé ?",
        answer: `Non, le BiliCheck est un test totalement non invasif. Il consiste en une simple mesure de la bilirubine en utilisant une sonde sur la peau du bébé, ce qui ne provoque aucune douleur.`,
      },
      {
        question: "Comment suivre la santé de mon enfant si une maladie chronique est diagnostiquée ?",
        answer: `
        Nous offrons un suivi personnalisé et régulier pour les enfants atteints de maladies chroniques. Des consultations périodiques sont prévues pour suivre l’évolution de la maladie et adapter les traitements en fonction de l’évolution de la santé de l’enfant.
        
        `,
      },
  
  ];

const servicesData = [
  {
      title: "Consultations pédiatriques ",
      description:
          `
Nous proposons des consultations régulières pour les enfants de tous âges, afin de prévenir, diagnostiquer et traiter une variété de conditions médicales. Que ce soit pour des suivis de croissance, des vaccinations ou la gestion de maladies courantes, nos pédiatres sont là pour offrir des soins de qualité adaptés à chaque situation.`,logo:"/chirurgie__i.png"
        },
  {
      title: "Photothérapie intensive",
      description:
      `
La photothérapie intensive est utilisée dans le traitement de l'hyperbilirubinémie néonatale (jaunisse chez les nouveau-nés). Cette technique, réalisée sous surveillance médicale, permet de réduire efficacement le taux de bilirubine dans le sang des bébés en utilisant des lumières spécifiques.`,logo:"/chirurgie__i.png"
        },
  {
      title: "Photothérapie conventionnelle  ",
      description:
      `
En complément de la photothérapie intensive, nous proposons également la photothérapie conventionnelle, qui est utilisée pour traiter les cas moins graves de jaunisse néonatale. Elle permet de normaliser progressivement le taux de bilirubine de façon sécuritaire.`,    logo:"/chirurgie__i.png"
        },
  {
      title: "Couveuse   ",
      description:
      `
Pour les nourrissons prématurés ou ayant besoin d'un suivi particulier, nous disposons de couveuses modernes permettant de maintenir une température optimale, d’assurer une oxygénation et un soutien vital adapté jusqu’à ce que le bébé soit prêt à être accueilli dans des conditions normales.      `, 
logo:"/chirurgie__i.png"
},
  {
      title: "Vaccins à la naissance  ",
      description:
      `
Afin de protéger les nouveau-nés dès leur arrivée, nous assurons l'administration des premiers vaccins nécessaires. Nos équipes respectent les protocoles sanitaires pour garantir la sécurité et la santé des nourrissons.`,  logo:"/chirurgie__i.png"
        },
  {
      title: "Hospitalisation  ",
      description:
      `
En cas de pathologies plus complexes, nous offrons des services d’hospitalisation, permettant un suivi médical quotidien et une prise en charge continue dans un environnement adapté aux jeunes patients. `,     logo:"/chirurgie__i.png"  },
  {
      title: "Bili Check   ",
      description:
      `
Le BiliCheck est un test non invasif pour mesurer le taux de bilirubine dans la peau du nouveau-né, permettant ainsi de détecter rapidement une jaunisse et de déterminer la nécessité de traitements supplémentaires comme la photothérapie.
`,
            logo:"/chirurgie__i.png"
        },
        {
            title: "Suivi des maladies chroniques pédiatriques   ",
            description:
            `
Nous proposons un suivi de qualité pour les enfants souffrant de maladies chroniques, comme l'asthme, le diabète ou d'autres conditions à long terme. Grâce à un suivi personnalisé, nous aidons à la gestion optimale de ces maladies pour améliorer la qualité de vie des jeunes patients.
`
      ,
                  logo:"/chirurgie__i.png"
              },
              {
                title: "CPAP (Pression Positive Continue des Voies Respiratoires)    ",
                description:
                `
Le CPAP est utilisé pour aider les bébés souffrant de difficultés respiratoires, en particulier ceux nés prématurément. Cet appareil aide à maintenir les voies respiratoires ouvertes en fournissant un flux constant d’air, garantissant ainsi une meilleure oxygénation.    `
          ,
                      logo:"/chirurgie__i.png"
                  },
            ];

  return (<>
	<Head>
	<title>Service de Pédiatrie et Néonatologie - EHPHASNAOUI</title>
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
 <Breadcumbs text="Service de Pédiatrie et Néonatologie"/>

 <PresentationService title="Présentation" description="Bienvenue dans notre service de pédiatrie et néonatologie, un espace dédié au soin, à l’accompagnement et au suivi de la santé des enfants, des nouveau-nés et des nourrissons. Notre équipe de médecins pédiatres, néonatologies, infirmiers et spécialistes s’engage à offrir des soins de haute qualité dans un environnement rassurant et bienveillant.
Nous mettons à disposition des équipements modernes et des protocoles de soins adaptés aux besoins spécifiques des plus jeunes, en particulier des nouveau-nés, tout en impliquant les familles à chaque étape du parcours de soin.
"/>
  
 
 <Services services={servicesData} />
 <Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
