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
      question: "Quand devrais-je commencer mon suivi prénatal ?",
      answer: `Il est recommandé de commencer le suivi prénatal dès le début de la grossesse, idéalement dès la confirmation de la grossesse. Un suivi précoce permet de réaliser les tests nécessaires et de garantir la santé de la mère et de l’enfant.
`,
    },
    {
      question: "Quelles sont les options pour la gestion de la douleur pendant l’accouchement ?",
      answer: `Nous proposons diverses options pour la gestion de la douleur lors de l'accouchement, incluant des méthodes non médicamenteuses (relaxation, hypnobirthing) ainsi que des options médicamenteuses comme la péridurale. Nous discuterons avec vous de la méthode la plus adaptée à vos attentes et à votre situation médicale.
`,
    },
    {
      question: "La césarienne est-elle systématiquement recommandée ?",
      answer: `Non, la césarienne est pratiquée uniquement lorsque cela est médicalement nécessaire, par exemple en cas de complications pendant la grossesse ou de difficultés durant l’accouchement. Nous privilégions toujours un accouchement par voie basse, sauf si la sécurité de la mère ou de l’enfant l'exige.`,
    },
    {
      question: "Quand consulter un gynécologue pour un bilan de santé ?",
      answer: `Il est conseillé de consulter un gynécologue pour un premier bilan de santé à partir de 18 ans, ou plus tôt si vous êtes sexuellement active ou présentez des symptômes spécifiques. Des bilans de santé réguliers sont également recommandés à partir de la trentaine.`,
    },
  
  ];

const servicesData = [
  {
      title: "Suivi prénatal  ",
      description:
          `
Nous offrons un suivi médical complet tout au long de la grossesse, incluant des consultations régulières, des échographies, des tests de dépistage et des bilans de santé pour assurer la sécurité de la mère et de l’enfant. Nos obstétriciens et sages-femmes vous accompagnent tout au long de cette période cruciale.          `,logo:"/main.png"
        },
  {
      title: "Préparation à l’accouchement",
      description:
      `
Nos séances de préparation à l'accouchement sont conçues pour vous fournir les outils nécessaires afin de vivre cet événement en toute sérénité. Nous proposons des cours adaptés à chaque situation (préparation à l'accouchement classique, gestion de la douleur, relaxation, préparation à la césarienne, etc.).      `,logo:"/main.png"
        },
  {
      title: "Accouchement et soins postnataux ",
      description:
      `
Nous garantissons un accompagnement médical pendant l'accouchement, qu’il soit naturel ou par césarienne, en assurant la sécurité de la mère et de l’enfant. Après l’accouchement, notre équipe prend en charge la mère et le bébé pour des soins postnataux, y compris des conseils sur l’allaitement, la récupération post-partum et le suivi du bien-être de l’enfant.`,    logo:"/main.png"
        },
  {
      title: "Chirurgie gynécologique  ",
      description:
      `Nous proposons une prise en charge chirurgicale des pathologies gynécologiques bénignes et malignes, telles que les fibromes, les kystes ovariens, les infections pelviennes, ainsi que des interventions pour les troubles de la fertilité. Nos interventions sont réalisées avec des techniques chirurgicales modernes et dans le respect des normes de sécurité les plus strictes.`, 
logo:"/main.png"
},
  {
      title: "Gynécologie préventive ",
      description:
      `
Nous assurons des consultations préventives, incluant des bilans de santé, des dépistages de cancers gynécologiques (cancer du sein, du col de l’utérus), des conseils sur la contraception, ainsi que des traitements pour les troubles hormonaux. La prévention reste une priorité pour préserver la santé des femmes à chaque étape de la vie.`,  logo:"/main.png"
        },
  {
      title: "Fertilité et assistance médicale à la procréation (AMP) ",
      description:
      `
Nous proposons une prise en charge de la fertilité pour les couples ayant des difficultés à concevoir. Nous offrons des traitements de fertilité personnalisés, tels que la stimulation ovarienne, l’insémination intra-utérine (IIU) et la fécondation in vitro (FIV), pour accompagner nos patientes dans leur parcours de conception.      `,     logo:"/main.png"  },
  {
      title: "Prise en charge de la ménopause  ",
      description:
      `
Notre unité accompagne les femmes dans la gestion de la ménopause, avec un suivi personnalisé pour traiter les symptômes hormonaux et proposer des traitements adaptés (thérapie hormonale et non hormonale). Nous offrons également des conseils nutritionnels et psychologiques pour une prise en charge globale.      `,
            logo:"/main.png"
        },
        {
            title: "Troubles menstruels  ",
            description:
            `
Nous intervenons pour traiter les troubles menstruels, qu'il s'agisse de règles irrégulières, de douleurs menstruelles sévères ou de saignements anormaux. Nous proposons des solutions médicales adaptées pour soulager ces symptômes et améliorer la qualité de vie de nos patientes.      `
      ,
                  logo:"/main.png"
              },
              {
                title: "Échographie obstétricale et gynécologique   ",
                description:
                `
Nos échographes réalisent des échographies prénatales (échographie de datation, échographie morphologique, suivi de la croissance fœtale) et des échographies gynécologiques pour l'évaluation de la santé de l'utérus, des ovaires et des organes reproducteurs.    `
          ,
                      logo:"/main.png"
                  },
];

  return (<>
	<Head>
	<title>Service Génycologie - EHPHASNAOUI</title>
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
 <Breadcumbs text="Unité de Gynécologie et Obstétrique"/>

 <PresentationService title="Présentation" description="L'Unité de Gynécologie et Obstétrique de notre établissement est dédiée à l'accompagnement médical des femmes à chaque étape de leur parcours de santé, de la prévention des pathologies gynécologiques à la gestion de la grossesse, de l'accouchement et du post-partum. Notre équipe pluridisciplinaire, composée de gynécologues, obstétriciens, sages-femmes et personnel soignant, est engagée à offrir des soins personnalisés et de haute qualité dans un environnement sécurisé et respectueux.
Nous mettons à votre disposition une large gamme de services médicaux et chirurgicaux, adaptés aux besoins spécifiques des femmes, allant de la prise en charge des troubles gynécologiques aux soins obstétricaux, tout en garantissant une approche préventive, thérapeutique et éducative.
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
