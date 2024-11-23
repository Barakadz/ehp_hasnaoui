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
      question: "Quand consulter un gastro-entérologue ou un hépatologue ?",
      answer: `Consultez un spécialiste si vous avez des symptômes comme :
•	Douleurs abdominales fréquentes
•	Troubles du transit (diarrhée, constipation)
•	Reflux gastro-œsophagiens
•	Perte d’appétit, nausées, ou selles sanglantes
•	Symptômes de maladie du foie (jaunisse, fatigue intense)
`,
    },
    {
      question: "Quels traitements pour l’hépatite C et B ?",
      answer:  `•	Hépatite C : Traitements antiviraux modernes qui permettent souvent une guérison complète.
•	Hépatite B : Antiviraux pour contrôler la maladie, mais pas de guérison complète possible.
`,
    },
    {
      question: "Comment diagnostiquer un cancer digestif ?",
      answer: `Le diagnostic se fait par :
•	Endoscopie (gastroscopie, coloscopie) pour visualiser et biopsier la tumeur.
•	Imagerie (échographie, scanner, IRM) pour localiser et évaluer le cancer.
•	Tests sanguins pour détecter des marqueurs tumoraux.
`,
    },
  ];

const servicesData = [
  {
      title: "Prise en Charge des Maladies du Foie (Hépatologie)",
      description:
      `
  Nous offrons une prise en charge spécialisée des pathologies hépatiques, qu’il s’agisse de maladies bénignes ou chroniques, ainsi que des complications liées aux maladies du foie.
•	Hépatite virale (Hépatite B, C et autres) : Diagnostic, suivi, et traitements antiviraux pour contrôler l’évolution de ces infections.
•	Cirrhose hépatique : Suivi des patients atteints de cirrhose, gestion des complications (comme l'ascite, les varices oesophagiennes, etc.) et prévention de la progression de la maladie.
•	Fibrose hépatique : Evaluation de la fibrose hépatique avec des techniques non invasives (FibroScan) et mise en place de traitements pour ralentir l’évolution de la maladie.
•	Transplantation hépatique : Prise en charge des candidats à la transplantation hépatique, du diagnostic à la préparation à l’intervention.

      `,
      logo:"/chirurgie__i.png"
        },
  {
      title: "Prise en Charge des Pathologies Digestives (Gastro-entérologie)",
      description:
      `
Nous traitons une large gamme de pathologies du système digestif, qu’elles soient inflammatoires, fonctionnelles ou tumorales.
•	Maladies inflammatoires chroniques de l'intestin (MICI) : Suivi et traitement des pathologies telles que la colite ulcéreuse et la maladie de Crohn, avec une approche personnalisée visant à contrôler les poussées et à améliorer la qualité de vie des patients.
•	Syndrome de l’intestin irritable (SII) : Diagnostic et gestion des symptômes fonctionnels comme la douleur abdominale, les ballonnements et les troubles du transit.
•	Gastrite et ulcère gastrique : Traitement des troubles inflammatoires de l’estomac et du duodénum, y compris les infections à Helicobacter pylori et les ulcères associés.
•	Reflux gastro-œsophagien (RGO) : Prise en charge des symptômes liés au reflux acide et des complications associées, comme l’œsophagite ou le cancer de l’œsophage.
•	Cancer gastro-intestinal : Dépistage, diagnostic précoce et traitement des cancers du côlon, de l'estomac, de l'œsophage, du foie, et du pancréas.
      `,    logo:"/chirurgie__i.png"
        },
  {
      title: "Endoscopie Digestive",
      description:
      `
   Notre service dispose des équipements les plus modernes pour réaliser des examens endoscopiques diagnostiques et thérapeutiques, permettant une visualisation directe des organes internes et la réalisation de biopsies ou de traitements ciblés.
•	Gastroscopie : Exploration de l'œsophage, de l’estomac et du duodénum pour diagnostiquer les maladies inflammatoires, les ulcères, les tumeurs et les infections.
•	Coloscopie : Exploration du côlon et du rectum pour dépister et traiter les polypes, les cancers du côlon et d’autres pathologies intestinales.
•	Endoscopie biliaire et pancréatique (CPRE) : Technique utilisée pour examiner les voies biliaires et pancréatiques, traiter les calculs biliaires ou les sténoses des canaux biliaires.
•	Sigmoïdoscopie : Examen de la partie inférieure du côlon pour diagnostiquer les troubles intestinaux.

      `,   logo:"/chirurgie__i.png"
        },
  





        {
            title: "Diagnostic et Traitement des Troubles Fonctionnels Digestifs",
            description:
            `
        Nos spécialistes prennent en charge les troubles digestifs fonctionnels et les maladies liées au fonctionnement des organes digestifs, y compris :
•	Syndrome du côlon irritable (SII) : Gestion des symptômes comme la douleur abdominale, la constipation ou la diarrhée, avec une approche multidisciplinaire incluant des modifications alimentaires, des traitements médicamenteux et des thérapies comportementales.
•	Dyspepsie fonctionnelle : Traitement des troubles digestifs récurrents comme les douleurs gastriques, les ballonnements et les nausées sans cause organique apparente.
•	Troubles du transit : Prise en charge de la constipation chronique ou de la diarrhée, et optimisation du traitement en fonction des résultats diagnostiques.
  
            `,   logo:"/chirurgie__i.png"
              },
              {
                title: "Prise en Charge de l’Obésité et Troubles Métaboliques",
                description:
                `
             L'obésité et les troubles associés, comme la stéatose hépatique (foie gras), sont des préoccupations croissantes. Nous proposons des solutions thérapeutiques visant à contrôler l’obésité et à traiter ses complications métaboliques.
•	Bilan métabolique : Evaluation de la fonction hépatique, rénale, et des risques cardiovasculaires associés à l'obésité.
•	Traitements nutritionnels et comportementaux : Accompagnement diététique et soutien psychologique pour aider les patients à perdre du poids et à maintenir une hygiène de vie saine.
•	Chirurgie bariatrique : Pour les cas d’obésité sévère, nous proposons des solutions chirurgicales comme la bypass gastrique ou la sleeve gastrectomie, afin de réduire le poids corporel et prévenir les complications liées à l’obésité.

                `,   logo:"/chirurgie__i.png"
                  },
                  {
                    title: "Prise en Charge des Pathologies Pancréatiques",
                    description:
                    `
            Les maladies du pancréas, y compris les pancréatites aiguës et chroniques ainsi que les cancers du pancréas, nécessitent une prise en charge spécialisée.
•	Pancréatite aiguë : Diagnostic et traitement des crises aigües, gestion des complications comme l’infection ou la défaillance organique.
•	Pancréatite chronique : Surveillance et traitement des douleurs chroniques, des troubles de la digestion et de l'insuffisance pancréatique.
•	Cancer du pancréas : Dépistage précoce, diagnostic par imagerie et biopsie, traitement chirurgical et suivi post-opératoire.

                    `,   logo:"/chirurgie__i.png"
                      },
                      {
                        title: "Consultations Spécialisées",
                        description:
                        `
                   Nos consultations spécialisées permettent une prise en charge complète et personnalisée des patients. Nous proposons des bilans de santé, des dépistages de maladies digestives et hépatiques, ainsi qu'un suivi adapté pour les pathologies chroniques.
•	Consultations de prévention : Pour dépister les troubles hépatiques et gastro-intestinaux, en particulier pour les personnes à risque (antécédents familiaux, hépatite virale, etc.).
•	Suivi des pathologies chroniques : Prise en charge des maladies chroniques du foie (cirrhose, hépatite chronique) et des maladies inflammatoires de l’intestin avec une approche individualisée.

                        `,   logo:"/chirurgie__i.png"
                          },
];

  return (<>
	<Head>
	<title>Service Hépatologie et Gastro-entérologie - EHPHASNAOUI</title>
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
 <Breadcumbs text="Service Cardio-Vasculaire"/>

 <PresentationService title="Présentation de service Hépatologie et Gastro-entérologie" description="Notre service d'hépatologie et gastro-entérologie propose une prise en charge complète et spécialisée des maladies du foie, du tube digestif et des organes associés. Grâce à notre équipe de spécialistes expérimentés et à un plateau technique de pointe, nous vous offrons des soins adaptés à chaque pathologie, qu’elle soit bénigne ou complexe. "/>
  
 
 <Services services={servicesData} />
 <Faq faqs={faqsData} />
<Qalite/>
 <Footer/>
 <ChatBubble/>
     </main>
</>
  );
}
