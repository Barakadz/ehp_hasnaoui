import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
 import * as Yup from 'yup';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
 import Typography from '@mui/material/Typography';
import axios from "axios";
import QRCode from 'qrcode.react';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import OTPInput from '../otp';
import { AiTwotoneContacts } from "react-icons/ai";
import { IoIosMailUnread } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

 const steps = ['Les informations personnelles', 'Vérification Mail' ];
 
const Rendezvous=()=>{
 
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    // Set the maximum date to the end of 2009
    const endOf2009 = '2009-12-31';
    setMaxDate(endOf2009);
  }, []); 
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []); 
  


  const currentDate = new Date();

	const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

	const {userData,setUserData}=useContext(AuthContext);
 

    const [datenaissance, setDatenaissance] = useState(null);
    const [dateRendezVous, setDateRendezvous] = useState(null);
 
    const handleChangeDateNaissance = (date) => {
		setDatenaissance(date);
    setUserData({DateNaissance:date});
    alert(userData.DateNaissance)

  };
	const handleChangeDateRendezVous = (date) => {
		setDateRendezvous(date);
    };
    const options = [
    { value: 'Médecine générale', label: 'Médecine générale' },
    { value: 'Gynécologie', label: 'Gynécologie' },
    { value: 'Dermatologie', label: 'Dermatologie' },
    { value: 'Traumatologie', label: 'Traumatologie' },
    { value: 'Endocrinologie', label: 'Endocrinologie' },
    { value: 'Pédiatrie', label: 'Pédiatrie' },
    { value: 'Ophtalmologie', label: 'Ophtalmologie' },
    { value: 'Hépato-gastro-entérologie', label: 'Hépato-gastro-entérologie' },
    { value: 'Urologie', label: 'Urologie' },
    { value: 'Cardiologie', label: 'Cardiologie' },
    { value: 'Cardiologie interventionnelle', label: 'Cardiologie interventionnelle' },
    { value: 'Chirurgie Cardiovasculaire', label: 'Chirurgie Cardiovasculaire' },
    { value: 'Chirurgie générale', label: 'Chirurgie générale' },
    { value: 'Laboratoire : Analyses médicales', label: 'Laboratoire : Analyses médicales' },
    { value: 'Imagerie : IRM, Échographie, Tomodensitométrie (TDM ou scanner), Radiographie', label: 'Imagerie : IRM, Échographie, Tomodensitométrie (TDM ou scanner), Radiographie' },




  ]; 

 
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);


  };
  const getIndividualValues = () => {
    if (selectedOption) {
      return selectedOption.map(option => option.value);
    }
    return [];
  };
  const setCookie = (name, value, minutes) => {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };
  /* formik */

    const initialValues={
        FirstName:userData.FirstName,
        LastName:userData.LastName,
  DateNaissance:userData.DateNaissance,
        NumeroTel:userData.NumeroTel,
 		DateRendezVous:userData.DateRendezVous,
		Email:userData.Email,
		NumeroCni:userData.NumeroCni,
		NumeroSecuriteSociale:userData.NumeroSecuriteSociale,
    Services:userData.Services,

		Heure:userData.Heure


    }
    const validationSchema = Yup.object().shape({
       FirstName:Yup.string().required('Il faut remplir votre Nom'),
 
       LastName:Yup.string().required('Il faut remplir Votre Prénom'),
	 DateNaissance:Yup.date().required('Il faut remplir Votre Date de Naissance') .max(new Date('2010-01-01'), "l'age doit étre plus de 14 ans"),
   DateRendezVous:Yup.date().required('Date is required'),
  
     Email:Yup.string().email('invalid Mail format').required('Il faut remplir Votre Mail'),
       NumeroTel:Yup.string()
        .matches(
          /^[0-9]{10}$/,
          'Numéro de téléphone doit étre 10 numbers'
        )
        .required('Il faut remplir votre Numéro de Téléphone'),
        NumeroCni:Yup.string()
        .matches(
          /^[0-9]{18}$/,
          'Le numéro de la carte d`identité doit être composé de 18 chiffres.',
        ),
        NumeroSecuriteSociale:Yup.string()
        .matches(
          /^[0-9]{12}$/,
          'Le Numéro de sécurité sociale doit être composé de 12 chiffres.'
      )
        
    })

    const handleOTPChange = (otp) => {
      console.log('OTP entered:', otp);
      setUserData({otpuser:otp});



      // You can handle the OTP value here (e.g., validate it against a server, etc.)
    };
const gg=()=>{
  generateTicketImage();

} 
    const onSubmit = (values) => {

      const cookieValue = getCookie('EHPH');
      if (cookieValue) {
        toast.error('Vous avez déjà réservé un rendez-vous. Après 5 minutes, il sera possible de prendre un nouveau rendez-vous');
       }else{


      async function fetchData() {
      
        try {                
      //    https://www.ehp-hasnaoui.com/api/auth/otp'

       const response = await axios.get('https://www.ehp-hasnaoui.com/api/auth/otp'); // Replace the URL with the actual API endpoint you want to request.
 
            setUserData({OTP:response.data,FirstName:values.FirstName,LastName:values.LastName,DateNaissance:values.DateNaissance,NumeroTel:values.NumeroTel,Email:values.Email,NumeroCni:values.NumeroCni,NumeroSecuriteSociale:values.NumeroSecuriteSociale,Services: getIndividualValues(),DateRendezVous:values.DateRendezVous,Heure:values.Heure})
           
 


        
 const apiUrl = 'https://www.groupe-hasnaoui.com/mail_ehph.php';
       const requestData = {
        Email: values.Email,
        Code: response.data,
        Nom:values.FirstName,
        Prenom:values.LastName
       };
       
       axios.post(apiUrl, requestData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }})
         .then(response => {
          //  console.log('POST request successful');
         // console.log('Response data:', response.data);
         })
         .catch(error => {
          console.error('An error occurred:', error);
         });
            
             } 

      
        
           //console.log('Code OTP:', response.data);
catch (error) {
          console.error('Error:', error);
        }
      }
       fetchData();  
      setActiveStep(1);
    }
     };
const retour=()=>{
  setActiveStep(0)
}
const suivant=()=>{
 // alert(userData.OTP)
 var otpuser=document.getElementById('otp0').value+document.getElementById('otp1').value+document.getElementById('otp2').value+document.getElementById('otp3').value+document.getElementById('otp4').value+document.getElementById('otp5').value;

 if(otpuser===userData.OTP){
    setActiveStep(2)

    const cookieValuae = getCookie('EHPH');
    if (cookieValuae) {
      toast.error('Vous avez déja réserver un Rendezvous ');
     }else{

for (const value of getIndividualValues()) { 
  const apiUrl = 'https://www.ehp-hasnaoui.com/api/auth/register';
  const requestData = {
    FirstName: userData.FirstName,
    LastName: userData.LastName,
    DateNaissance: userData.DateNaissance,
    NumeroTel: userData.NumeroTel,
    Service: value, // or userData.Services if you meant to use that
    DateRendezVous: userData.DateRendezVous,
    Email: userData.Email,
    NumeroCni: userData.NumeroCni,
    NumeroSecuriteSociale: userData.NumeroSecuriteSociale,
    Heure: userData.Heure
  };
  
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      toast.success('Rendezvous à été planifié pour : ' + value);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  
 } 
 
 
 setCookie('EHPH', JSON.stringify("HASNAOUI"), 5);
}
  }else{
     toast.error("Vous devez écrire le numéro que nous vous avons envoyé par Mail !")
   }
 }

 const confirmation=()=>{
 
  }

 
    return(
        <div className='container '>
			<div className="row my-4">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<h2>Prendre un Rendez-vous
</h2>
							<img src="section-img.png" alt="#"/>
							<p>
Prendre un rendez-vous médical en ligne permet de choisir facilement et rapidement le jour et l’heure de la consultation,<br/> sans avoir à se déplacer. Ce service est gratuit, convivial et sécuritaire.</p>
						</div>
					</div>
				</div>
			 <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Code OTP</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <center>Bienvenue à l'Etablissement Hospitalier Privé HASNAOUI. Nous sommes ravis que vous envisagiez de prendre rendez-vous avec nous. </center>
          </Typography>
           
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
		  {activeStep === 0 && (
          <section className="appointment">
		  <div className="container">
			  
			  <div className="row">
				  <div className="col-lg-6 col-md-12 col-12">
				  <Formik initialValues={initialValues} validationSchema={validationSchema}   onSubmit={onSubmit} validateOnMount>
	  <Form >


						  <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
    <label htmlFor="FirstName">Nom :<b style={{color:'red'}}>*</b></label>
    <div className="input-group">
        <span className="input-group-text"><AiTwotoneContacts /></span>
        <Field id="FirstName" name="FirstName" className="form-control"   type="text" placeholder="Nom *" />
    </div>
    <p style={{color:'red'}}><ErrorMessage name="FirstName" /></p>
</div>


<div className="col-lg-6 col-md-6 col-12">
    <label htmlFor="FirstName">Prénom :<b style={{color:'red'}}>*</b></label>
    <div className="input-group">
        <span className="input-group-text"><AiTwotoneContacts /></span>
        <Field id="LastName" name="LastName" className="form-control"  type="text" placeholder="Prénom *" />
    </div>
    <p style={{color:'red'}}><ErrorMessage name="LastName" /></p>
</div>


<div className="col-lg-6 col-md-6 col-12">
    <label htmlFor="FirstName">Date de naissance :<b style={{color:'red'}}>*</b></label>
    <div className="input-group">
        <span className="input-group-text"><MdOutlineDateRange /></span>
        <Field id="DateNaissance" name="DateNaissance" className="form-control"  type="date" max={maxDate} placeholder="Date de Naissance *" />
    </div>
    <p style={{color:'red'}}><ErrorMessage name="DateNaissance" /></p>
</div>
							 
				
        
<div className="col-lg-6 col-md-6 col-12">
    <label htmlFor="FirstName">Numéro de Téléphone :<b style={{color:'red'}}>*</b></label>
    <div className="input-group">
        <span className="input-group-text"><BsTelephone /></span>
        <Field id="NumeroTel" name="NumeroTel" className="form-control"  type="text" max={maxDate} placeholder="Numéro de télephone *" />
    </div>
    <p style={{color:'red'}}><ErrorMessage name="NumeroTel" /></p>
</div>      




     
        			  
							  <div className="col-lg-6 col-md-6 col-12">
								  <div className="form-group">
                  <label>Services :<b style={{color:'red'}}>*</b></label>
                  <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isMulti
        required
      />
 				  <p style={{color:'red'}}><ErrorMessage name="Services"/></p>

 															</div>
							  </div>




                <div className="col-lg-6 col-md-6 col-12">
    <label htmlFor="FirstName">Date de Rendezvous :<b style={{color:'red'}}>*</b></label>
    <div className="input-group">
        <span className="input-group-text"><MdOutlineDateRange /></span>
        <Field id="DateRendezVous" name="DateRendezVous" className="form-control"  type="date" 	 min={minDate} placeholder="Date de Naissance *" />
    </div>
    <p style={{color:'red'}}><ErrorMessage name="DateRendezVous" /></p>
</div>
					








						 
                <div className="col-lg-6 col-md-6 col-12">
    <label htmlFor="Email">Mail :<b style={{color:'red'}}>*</b></label>
    <div className="input-group">
        <span className="input-group-text"><IoIosMailUnread/></span>
        <Field id="Email" name="Email" className="form-control" type="email"  style={{textTransform:'lowercase'}}   placeholder="Enter Votre Mail"   />
    </div>
    <p style={{color:'red'}}><ErrorMessage name="Email"/></p>
</div>	  







               
					

                 <div className="col-lg-6 col-md-6 col-12">
                <label>Heure :</label>

								   <Field id="Heure" name="Heure"className="forminput" type="time" placeholder="Heure *"/>
								  <p style={{color:'red'}}><ErrorMessage name="Heure"/></p>
							   </div>
							  <div className="col-lg-6 col-md-6 col-12">
                <label>Numéro de la carte d'identité : </label>

								  <Field id="NumeroCni" name="NumeroCni"className="forminput" type="text" placeholder="Numéro de CNI "/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroCni"/></p>
							   </div>
							  <div className="col-lg-6 col-md-6 col-12">
                <label>Numéro de sécurité sociale :</label>

								   <Field id="NumeroSecuriteSociale" name="NumeroSecuriteSociale"className="forminput" type="text" placeholder="Numéro de sécurité sociale "/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroSecuriteSociale"/></p>
							   </div>

                
                 <div className="col-lg-12 col-md-12 col-12 d-flex mb-2">
  <Field type="checkbox" className="form-check-input" id="langage1" name="langage1" value="javascript"min="2024-05-01" required/>
<label for="langage1"className='mx-2 textwrap'  >  &nbsp;&nbsp;j'accepte que les informations saisies soient utilisées pour me recontacter</label><br/>
  </div>
 </div>						  <div className="row">
							  <div className="col-lg-5 col-md-4 col-12">
								  <div className="form-group">
									  							   <button type='submit' className='btn' >Suivant</button>

								  </div>
							  </div>
						  </div>
						  </Form></Formik>
				  </div>
				  <div className="col-lg-6 col-md-12 ">
					  <div >
						  <img src="rendez.jfif"  className="appointment-image"  alt="#"/>
					  </div>
				  </div>
			  </div>
		  </div>
	  </section>   
			 


            )}

{activeStep === 1 && (    <div className="  ">
<p className='text-center'>Nous allons envoyer un Code OTP à l'email {userData.Email}</p>
	<div className="d-flex "   style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
  <OTPInput length={6} onChange={handleOTPChange} />

			</div>
            <center className='mt-4'><button className='btn mx-4' onClick={retour}>Retour</button> <button className='btn mx-4' onClick={suivant}>Suivant</button></center>


			</div>

            )}

{activeStep === 2 && (   <div > <div className="borderTicket"id='ticket-content'> 

<p className='text-center'>Le rendez-vous sera automatiquement annulé s'il n'est pas honoré dans les 10 minutes.</p><br/>
<div className='container'><div className="row"><div className="col">
<div className='d-flex'><b className='text-center' style={{fontSize:'23px'}}>  Ticket :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>	 <br/> <label></label><p style={{fontSize:'23px',fontWeight:'bold'}}> {userData.FirstName+' '+userData.LastName}</p></div>

<div >
<div>  
 <div className='d-flex'><label>Date de Rendez vous : &nbsp;&nbsp;&nbsp; </label><p>  {userData.DateRendezVous +' '+userData.Heure}</p></div>
 <div className='d-flex'><label>Services : &nbsp;&nbsp;&nbsp; </label><p>  {userData.Services}</p></div>

</div>

<div className="col">
 
  </div></div></div> 
   <center> <div className='codeQr'>
   <QRCode value={'Bienvenue sur L`EHP HASNAOUI :\n'+userData.FirstName+' '+userData.LastName+'\n'+userData.DateNaissance+'\n'+userData.Email+'\n'+userData.NumeroTel+'\n'}        
/>    

      <img src="logozoom.PNG" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: 'auto' ,opacity:'0.7'}} alt="logo" />
    </div>
</center>
</div>
</div>
 <center><b>www.ehp-hasnaoui.com</b></center>
</div><div><p>Imprimé le {currentDate.toLocaleDateString()+" "+currentDate.toLocaleTimeString()}</p></div>
<center> 
<button className="download-button"onClick={gg}>
  <div className="docs">
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="css-i6dzq1"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      ></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
    Télécharger le Ticket
  </div>
  <div className="download">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="css-i6dzq1"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  </div>
</button>




</center><br></br>
<center>
<center className=''>  <button className='btn mx-4' onClick={confirmation}>Confirmer votre Rendezvous</button></center>

 </center>
			</div>

            )}
         
        </React.Fragment>
      )}
    </Box>
    <ToastContainer />

        </div>
    )
}

export default Rendezvous;