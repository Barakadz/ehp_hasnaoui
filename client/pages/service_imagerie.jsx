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
      question: " Quels sont les préparatifs nécessaires avant un examen d’imagerie ?",
      answer: `Les préparatifs varient en fonction du type d'examen. Pour certains examens, comme le scanner ou l'IRM, vous pourriez être invité à jeûner ou à éviter certains aliments. Notre équipe vous fournira des instructions précises avant l'examen.
`,
    },
    {
      question: "Les examens d’imagerie sont-ils douloureux ?",
      answer: `Les examens d’imagerie sont généralement non invasifs et ne causent pas de douleur. Vous pourriez ressentir un léger inconfort pendant certains examens, comme l’injection d’un produit de contraste, mais cela est temporaire.
`,
    },
    {
      question: "Combien de temps dure un examen d’imagerie ?",
      answer: `La durée des examens varie en fonction de la procédure. Une radiographie peut prendre quelques minutes, tandis qu’une IRM ou un scanner peut durer de 15 à 45 minutes, selon la complexité de l'examen.`,
    },
    {
      question: "Comment puis-je obtenir les résultats de mon examen ?",
      answer: `Les résultats de l'examen seront examinés par notre radiologue, qui rédigera un rapport détaillé. Votre médecin vous communiquera ces résultats et discutera des prochaines étapes du traitement.`,
    },
    {
      question: "Les examens d’imagerie sont-ils couverts par les assurances ?",
      answer: `La couverture des examens d’imagerie peut varier en fonction de votre assurance. Nous vous conseillons de vérifier auprès de votre assureur pour connaître les détails de votre couverture.`,
    }
  ];

const servicesData = [
  {
      title: "Radiologie Conventionnelle : ",
      description:
          `Nous utilisons des équipements modernes pour réaliser des radiographies conventionnelles, qui permettent de visualiser les structures osseuses et organiques afin de détecter les anomalies telles que fractures, infections et autres pathologies.`,
 logo:"/chirurgie__i.png"
        },
  {
      title: "Scanner (CT)",
      description:
      `Notre scanner haute résolution fournit des images détaillées en coupe transversale, offrant une vue précise des structures internes du corps. Cet examen est crucial pour le diagnostic des maladies complexes et le suivi post-traitement.`,
   logo:"/chirurgie__i.png"
        },
  {
      title: "Imagerie par Résonance Magnétique (IRM) ",
      description:
      `L’IRM utilise des champs magnétiques puissants et des ondes radio pour obtenir des images très détaillées des tissus mous et des organes. Elle est particulièrement utile pour évaluer les tissus neurologiques, musculaires et articulaires.
`,    logo:"/chirurgie__i.png"
        },
  {
      title: "Échographie ",
      description:
      `Cette technique non invasive utilise des ondes sonores pour produire des images en temps réel des organes internes, des tissus mous et des structures corporelles. L’échographie est souvent utilisée pour surveiller la grossesse, diagnostiquer des troubles abdominaux et guider les procédures médicales.`, 
logo:"/chirurgie__i.png"
},
  {
      title: "Mammographie",
      description:
      `Spécialisée dans le dépistage et le diagnostic des anomalies mammaires, la mammographie utilise des rayons X pour examiner les tissus mammaires et détecter les signes précoces de cancer du sein.
`,  logo:"/chirurgie__i.png"
        },
  {
      title: "Densitométrie Osseuse (DME)",
      description:
      `La DME mesure la densité minérale osseuse pour évaluer le risque d'ostéoporose et d'autres troubles osseux. Cet examen est essentiel pour le diagnostic précoce et le suivi des maladies osseuses.`,     logo:"/chirurgie__i.png"
        },
  {
      title: "Radiographie Panoramique ",
      description:
      `Utilisée principalement en dentisterie, la radiographie panoramique fournit une vue d'ensemble complète des structures dentaires et maxillaires. Elle est essentielle pour le diagnostic des pathologies dentaires, des malformations et des fractures.`,
            logo:"/chirurgie__i.png"
        },
];

  return (<>
	<Head>
	<title>Service Imagerie - EHPHASNAOUI</title>
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
 <Breadcumbs text="Imagerie Médicale"/>

 <PresentationService title="Imagerie Médicale" description="L’imagerie médicale joue un rôle essentiel dans le diagnostic précis et le suivi des pathologies. À l’Établissement Hospitalier Privé Hasnaoui, nous disposons de technologies de pointe et d’une équipe d’experts dédiés pour fournir des examens d’imagerie fiables et efficaces. Notre objectif est d’offrir des résultats clairs et détaillés pour aider nos médecins à établir les meilleurs plans de traitement pour nos patients."/>
  
 
 <Services services={servicesData} />
 <Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
