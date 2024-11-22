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
      question: "Quand consulter un chirurgien orthopédique ?",
      answer: `
      Il est recommandé de consulter un chirurgien orthopédique si vous présentez des douleurs articulaires persistantes, une perte de mobilité ou après un traumatisme (fracture, entorse, etc.).
      `,
    },
    {
      question: "Qu'est-ce que l'arthroscopie et quels sont ses avantages ?",
      answer:  `L'arthroscopie est une intervention chirurgicale mini-invasive qui permet de traiter des affections internes des articulations, avec des avantages tels qu'une réduction des cicatrices, moins de douleur postopératoire et une reprise plus rapide des activités.`,
    },
    {
      question: "Quel est le temps de récupération après une chirurgie de remplacement articulaire ?",
      answer:  `Le temps de récupération varie selon le type d'intervention et l'état général du patient, mais la rééducation commence généralement dès les premiers jours après l'opération. La reprise des activités normales peut prendre entre 3 et 6 mois, selon chaque patient.`,
    },
  ];

const servicesData = [
  {
      title: "Traumatologie",
      description:
      `
  Traitement des fractures, luxations et blessures traumatiques, avec une approche personnalisée pour chaque type de traumatisme.
      `,
      logo:"/chirurgie__i.png"
        },
  {
      title: "2.	Chirurgie Prothétique (PTH, PTG, PTE)",
      description:
      `
Remplacement articulaire pour traiter l'arthrose et les pathologies des articulations majeures, y compris la prothèse totale de hanche (PTH), la prothèse totale de genou (PTG) et la prothèse totale d'épaule (PTE).    `,    logo:"/chirurgie__i.png"
        },
  {
      title: "Chirurgie Arthroscopique du Genou et de l'Épaule",
      description:
      `
Intervention mini-invasive pour traiter les lésions du cartilage, des ligaments et des tendons, offrant des avantages tels qu'une récupération plus rapide et moins de douleur postopératoire.
      `,   logo:"/chirurgie__i.png"
        },
        {
            title: "Chirurgie Arthroscopique du Genou et de l'Épaule",
            description:
            `
      Intervention mini-invasive pour traiter les lésions du cartilage, des ligaments et des tendons, offrant des avantages tels qu'une récupération plus rapide et moins de douleur postopératoire.
            `,   logo:"/chirurgie__i.png"
              },
              {
                title: "Chirurgie de la Main et Microchirurgie des Nerfs",
                description:
                `
Prise en charge des affections de la main, des tendinites et des fractures, ainsi que des réparations nerveuses avec des techniques de microchirurgie pour une récupération optimale.                `,   logo:"/chirurgie__i.png"
                  },
                  {
                    title: "Chirurgie du Rachis (Colonne Vertébrale)",
                    description:
                    `
Traitement des pathologies de la colonne vertébrale, telles que les hernies discales, scolioses et douleurs chroniques, avec des techniques modernes et peu invasives.    `,   logo:"/chirurgie__i.png"
                      },   
                      {
                        title: "6.	Traumatologie du Sport",
                        description:
                        `
    Traitement des pathologies de la colonne vertébrale, telles que les hernies discales, scolioses et douleurs chroniques, avec des techniques modernes et peu invasives.    `,   logo:"/chirurgie__i.png"
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
 <Breadcumbs text="Chirurgie Orthopédique et Traumatologique"/>

 <PresentationService title="Présentation de service Chirurgie Orthopédique et Traumatologique" description= "Nous proposons une prise en charge spécialisée en chirurgie orthopédique et traumatologique, couvrant un large éventail de pathologies musculo-squelettiques. Grâce à une équipe de chirurgiens expérimentés et à des techniques de pointe, nous assurons des traitements adaptés à chaque patient, visant à restaurer la mobilité, soulager la douleur et améliorer la qualité de vie."/>
  
 
 <Services services={servicesData} />
 <Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
