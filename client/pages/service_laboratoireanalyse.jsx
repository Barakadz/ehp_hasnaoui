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
      title: "Hématologie",
      description:
      `
   Analyse des composants du sang (globules rouges, globules blancs, plaquettes) pour diagnostiquer des maladies telles que l'anémie, les troubles de la coagulation, et les maladies sanguines comme les leucémies.
      `,
      logo:"/chirurgie__i.png"
        },
  {
      title: "Biochimie",
      description:
      `
Étude des substances chimiques présentes dans le sang, l'urine et d'autres liquides corporels pour évaluer la fonction des organes (foie, reins, cœur), détecter les déséquilibres métaboliques et surveiller diverses pathologies.
  `,    logo:"/chirurgie__i.png"
        },
  {
      title: "Hormonologie",
      description:
      `
 Analyse des hormones dans le corps pour diagnostiquer et suivre des troubles hormonaux tels que les dysfonctionnements thyroïdiens, les troubles de la reproduction, ou les maladies liées aux glandes endocrines.

      `,   logo:"/chirurgie__i.png"
        },
        {
          title: "Immunotransfusion",
          description:
          `
 Tests de compatibilité sanguine, y compris les groupes sanguins et les examens de transfusion, afin de garantir la sécurité et l'efficacité des transfusions sanguines, ainsi que le suivi des traitements immunitaires.
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
