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
      question: "Quand consulter un urologue ?",
      answer: `Il est conseillé de consulter un urologue si vous présentez des symptômes tels que :
•	Douleur ou difficulté à uriner.
•	Présence de sang dans les urines (hématurie).
•	Infections urinaires récurrentes.
•	Problèmes de continence (incontinence urinaire).
•	Troubles de la fonction sexuelle (dysfonction érectile, éjaculation précoce).
Si vous avez plus de 50 ans, un bilan de santé urologique régulier est aussi recommandé, notamment pour surveiller la prostate.
`,
    },
    {
      question: "Quels sont les traitements pour l'incontinence urinaire ?",
      answer: `Le traitement de l'incontinence urinaire dépend de sa cause. Les options incluent :
•	Des exercices de rééducation du périnée (renforcer les muscles du plancher pelvien).
•	Des médicaments pour réduire les envies pressantes ou améliorer la capacité de la vessie.
•	Des dispositifs médicaux comme des pessaires ou des cathéters.
•	Dans certains cas, une intervention chirurgicale, comme l'implantation de bandelettes sous-urétrales.
Votre urologue pourra vous recommander le traitement le plus adapté à votre situation
`,
    },
    {
      question: "Le cancer de la prostate est-il fréquent ?",
      answer: `Le cancer de la prostate est le cancer le plus courant chez les hommes, surtout après 50 ans. Il évolue souvent lentement et peut être asymptomatique au début. Des tests de dépistage comme le dosage du PSA (antigène prostatique spécifique) et un toucher rectal sont recommandés pour détecter les anomalies. Si vous avez un antécédent familial de cancer de la prostate, il est recommandé de commencer les bilans de dépistage plus tôt.`,
    }
  ];

const servicesData = [
  {
      title: "Chirurgie de la Prostate",
      description:
          `Nous proposons plusieurs techniques de prise en charge pour l'hypertrophie bénigne de la prostate (HBP), adaptées à chaque patient. Selon l’indication et l'état de santé du patient, nos options vont de la chirurgie classique à la chirurgie endoscopique mini-invasive. Nous utilisons également des technologies avancées pour offrir une solution rapide et moins invasive.
\n <br/>•	Prostatectomie totale : Traitement du cancer de la prostate, avec une approche chirurgicale qui permet une résection complète de la glande prostatique.
•	Biopsie prostatique : Un examen essentiel pour poser un diagnostic de cancer prostatique, effectué sous anesthésie locale ou générale, selon le cas.
`,
 logo:"/chirurgie__i.png"
        },
  {
      title: "Lithiases Urinaires",
      description:
      `Pour le traitement des calculs urinaires, nous disposons d'un plateau technique complet permettant une prise en charge mini-invasive. Grâce à notre technologie de pointe, notamment le laser Holmium YAG puissant, nous pouvons détruire les calculs rénaux ou urinaires de manière précise et efficace, tout en préservant les tissus sains.
Les techniques que nous utilisons incluent :
•	Lithotripsie (fragmentation des calculs).
•	Urétéroscopie et néphroscopie pour accéder et retirer les calculs en utilisant des instruments miniaturisés.
`,
   logo:"/chirurgie__i.png"
        },
  {
      title: "Prise en Charge des Pathologies Tumorales de l'Appareil Urogénital",
      description:
      `Pour le traitement des calculs urinaires, nous disposons d'un plateau technique complet permettant une prise en charge mini-invasive. Grâce à notre technologie de pointe, notamment le laser Holmium YAG puissant, nous pouvons détruire les calculs rénaux ou urinaires de manière précise et efficace, tout en préservant les tissus sains.
Les techniques que nous utilisons incluent :
•	Lithotripsie (fragmentation des calculs).
•	Urétéroscopie et néphroscopie pour accéder et retirer les calculs en utilisant des instruments miniaturisés.
`,    logo:"/chirurgie__i.png"
        },
  {
      title: "Urologie Fonctionnelle",
      description:
      `L'incontinence urinaire et les prolapsus des organes pelviens sont des pathologies courantes qui peuvent impacter gravement la qualité de vie. Nous offrons une prise en charge globale et personnalisée, incluant :
•	Rééducation périnéale : pour renforcer les muscles du plancher pelvien et améliorer la continence.
•	Chirurgie des prolapsus : correction des descentes d’organes pelviens par voie chirurgicale ou par techniques mini-invasives.
`, 
logo:"/chirurgie__i.png"
},
  {
      title: "Chirurgie de Varicocèle",
      description:
      `La varicocèle est une dilatation des veines du scrotum qui peut affecter la fertilité. Nous proposons deux approches chirurgicales :
•	Chirurgie par laparotomie pour les cas plus complexes.
•	Chirurgie laparoscopique et microscopique, moins invasive et offrant une meilleure récupération post-opératoire.
`,  logo:"/chirurgie__i.png"
        },
  {
      title: "Consultations Spécialisées",
      description:
      `Nos consultations spécialisées couvrent tous les domaines de l’urologie, qu’il s’agisse de suivi, de diagnostic ou de traitement. Nos urologues sont à l'écoute de vos besoins pour vous orienter vers la meilleure prise en charge possible.
\n•	Consultations de prévention et dépistage : pour surveiller la santé urologique (cancer de la prostate, infections urinaires, etc.).
\n•	Suivi personnalisé : pour les patients ayant subi une chirurgie urologique ou pour ceux nécessitant des traitements à long terme.
`,     logo:"/chirurgie__i.png"
        },
  {
      title: "Chirurgie des Malformations Urogénitales",
      description:
      `Nous intervenons sur les pathologies malformatives de l’appareil urogénital, tant chez l’adulte que chez l’enfant. Que ce soit pour des malformations congénitales ou acquises, nous proposons des traitements chirurgicaux adaptés, utilisant des techniques de laparotomie, laparoscopie ou chirurgie ouverte selon la nature et la gravité de la malformation.`,      logo:"/chirurgie__i.png"
        },
];

  return (<>
	<Head>
	<title>Service urologie - EHPHASNAOUI</title>
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
 <Breadcumbs text="Service Urologie"/>

 <PresentationService title="L'Urologie : Spécialité médicale dédiée à la santé urinaire et reproductive" description="L'urologie est une spécialité chirurgicale et médicale qui s'intéresse au diagnostic, au traitement et à la prévention des maladies affectant le système urinaire chez les hommes et les femmes, ainsi que le système reproducteur masculin. Cette discipline couvre une large gamme de pathologies, allant des infections urinaires bénignes aux troubles plus complexes, comme les cancers urologiques ou les dysfonctionnements sexuels.
 Les organes concernés par l'urologie sont les reins, la vessie, l'urètre, ainsi que les organes reproducteurs masculins, tels que les testicules, la prostate et le pénis. L'urologue prend en charge une variété de pathologies, et son rôle est essentiel pour améliorer la qualité de vie des patients en leur offrant des solutions thérapeutiques adaptées..
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
