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
      question: "Qu'est-ce que l'anesthésie générale ?",
      answer: "L'anesthésie générale est une procédure qui permet d'endormir totalement le patient pendant une intervention chirurgicale. Cela élimine toute douleur et toute conscience pendant l'opération. Un anesthésiste assure la surveillance de votre état tout au long de l'intervention.",
    },
    {
      question: "Est-ce que je peux être admis en réanimation après une chirurgie ?",
      answer: "Oui, en fonction de la nature de l'opération, il est possible que vous soyez transféré en réanimation ou en soins post-opératoires pour une surveillance étroite. Cela se fait afin de garantir votre sécurité, particulièrement après des interventions complexes.",
    },
    {
      question: "Quelle est la différence entre réanimation et soins intensifs ?",
      answer: "La réanimation se réfère spécifiquement aux soins destinés aux patients dont les fonctions vitales sont gravement altérées et nécessitent des interventions urgentes. Les soins intensifs sont un terme plus général qui inclut également la surveillance et le traitement des patients dans des états graves mais moins critiques.",
    },
    {
        question: "Quels sont les risques associés à l'anesthésie ?",
        answer: "Les risques de l'anesthésie sont généralement faibles, mais dépendent de l'état de santé du patient et du type d'anesthésie administrée. Avant toute intervention, une consultation pré-anesthésique permet d'évaluer ces risques et de prendre les mesures nécessaires pour les minimiser.",
      },
      {
        question: "Comment la douleur est-elle gérée après une chirurgie ?",
        answer: "La gestion de la douleur est une priorité dans notre service. Nous utilisons différentes méthodes, telles que des médicaments antidouleur, des techniques d'anesthésie locale, et des soins personnalisés, pour assurer votre confort après l'intervention.",
      },
  ];

const servicesData = [
  {
      title: "Anesthésie générale et loco-régionale",
      description:
      `
o	Anesthésie pour interventions chirurgicales programmées ou d'urgence.
o	Anesthésie locale, locorégionale (péridurale, spinale) selon les besoins du patient.
      `,
      logo:"/hopital.png"
        },
  {
      title: "Réanimation polyvalente",
      description:
      `
o	Prise en charge des patients en état critique nécessitant des soins intensifs.
o	Surveillance 24/7 dans des unités de soins intensifs équipées des dernières technologies médicales.
o	Réanimation après intervention chirurgicale lourde.
 `,          logo:"/hopital.png"

        },
  {
      title: "Soins post-opératoires en salle de réveil",
      description:
      `
o	Surveillance post-chirurgicale immédiate après une anesthésie générale.
o	Gestion de la douleur postopératoire, incluant des traitements personnalisés pour chaque patient.
      `,         logo:"/hopital.png"

        },
        {
            title: "Prise en charge des urgences vitales",
            description:
            `
      o	Réanimation en cas de défaillance cardio-respiratoire aiguë.
o	Soins d’urgence pour des patients dans un état critique, avec une surveillance et une gestion spécifiques.
 `,         logo:"/hopital.png"

              },
              {
                title: "Anesthésie pour patients à risque",
                description:
                `
          o	Anesthésie adaptée pour des patients ayant des antécédents médicaux complexes (maladies cardiaques, respiratoires, etc.).
o	Consultation pré-anesthésique pour évaluer les risques et définir un plan de soins personnalisé.

                 `,         logo:"/hopital.png"

                  },
                  {
                    title: "Suivi et réhabilitation post-réanimation",
                    description:
                    `
o	Suivi personnalisé en post-réanimation pour aider à la récupération après une prise en charge intensive                     `,         logo:"/hopital.png"

                      },
                      
];

  return (<>
	<Head>
	<title>  Service de Réanimation et Anesthésie- EHPHASNAOUI</title>
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
 <Breadcumbs text="Service de Réanimation et Anesthésie"/>

 <PresentationService title="Présentation Service de Réanimation et Anesthésie" description="Le service de réanimation et anesthésie de notre hôpital est dédié à la prise en charge des patients nécessitant une surveillance intensive et un traitement spécialisé. Nos équipes, composées d'anesthésistes-réanimateurs hautement qualifiés, interviennent lors de situations critiques liées à des interventions chirurgicales complexes ou à des défaillances multiviscérales.
La réanimation permet de stabiliser et surveiller les patients en état critique, tandis que l'anesthésie assure un confort optimal et une sécurité maximale avant, pendant et après les actes chirurgicaux. Nous mettons en œuvre des technologies de pointe pour offrir des soins de qualité dans un environnement sécurisant et adapté aux besoins de chaque patient.
 
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
