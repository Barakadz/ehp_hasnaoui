import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";

import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import OTPInput from '../otp';
 
const steps = ['Les informations personnelles', 'Vérification Mail', 'Confirmation de Rendez vous'];

const Rendezvous=()=>{
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
    { value: 'Consultation médecine générale', label: 'Consultation médecine générale' },
    { value: 'gynéco-obstétrique', label: 'gynéco-obstétrique' },
    { value: 'pédiatrie', label: 'pédiatrie' },
	{ value: 'cardiologie', label: 'cardiologie' },
    { value: 'dermatologie', label: 'dermatologie' },
    { value: 'endocrinologie', label: 'endocrinologie' },
    { value: 'traumatologie', label: 'traumatologie' },
    { value: 'anesthésie', label: 'anesthésie' },
    { value: 'chirurgie générale', label: 'chirurgie générale' },
    { value: 'chirurgie cardio-vasculaire', label: 'chirurgie cardio-vasculaire' },
    { value: 'Laboratoire d’analyses médicales', label: 'Laboratoire d’analyses médicales' },
    { value: 'IRM', label: 'IRM' },
    { value: 'Scanner', label: 'Scanner' },
    { value: 'Mammographie', label: 'Mammographie' },
    { value: 'Radiographie Standard', label: 'Radiographie Standard' },
    { value: 'Télémétrie', label: 'Télémétrie' },
    { value: 'Panoramique dentaire', label: 'Panoramique dentaire' },
    { value: 'DMO', label: 'DMO' },
    { value: 'Urgences (médicales)', label: 'Urgences (médicales)' },
    { value: 'Urgences (chirurgicales)' , label: 'Urgences (chirurgicales)' },
    { value: 'Réadaptation fonctionnelle', label: 'Réadaptation fonctionnelle' },
    { value: 'gynécologie', label: 'gynécologie' },
    { value: 'obstétrique', label: 'obstétrique' },
    { value: 'pédiatrie', label: 'pédiatrie' },
    { value: 'néonatologie', label: 'néonatologie' },
    { value: 'viscérale', label: 'viscérale' },
    { value: 'cardio-vasculaire,', label: 'cardio-vasculaire,' },
    { value: 'cardiologie-interventionnelle', label: 'cardiologie-interventionnelle' },
    { value: 'vasculaire', label: 'vasculaire' },
    { value: 'neurochirurgie', label: 'neurochirurgie' },
    { value: 'gynéco-obstétrique', label: 'gynéco-obstétrique' },
	{ value: 'ophtalmologie', label: 'ophtalmologie' },
    { value: 'orthopédique et traumatologique', label: 'orthopédique et traumatologique' },
    { value: 'explorations endoscopiques', label: 'explorations endoscopiques' },
    { value: 'stérilisation', label: 'stérilisation' },
    { value: 'transport sanitaire', label: 'transport sanitaire' },
    { value: 'buanderie', label: 'buanderie' },
	{ value: 'restauration', label: 'restauration' },



  ]; 

 
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
   // setUserData({ Services:selectedOption})

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
	 DateNaissance:Yup.date().required('Il faut remplir Votre Date de Naissance'),
   DateRendezVous:Yup.date().required('Il faut remplir Votre Date de rendez vous'),
  
 
     Email:Yup.string().email('invalid Mail format').required('Il faut remplir Votre Mail'),
       NumeroTel:Yup.string()
        .matches(
          /^[0-9]{10}$/,
          'Numéro de téléphone doit étre 10 numbers'
        )
        .required('Il faut remplir votre Numéro de Téléphone')
    })

    const handleOTPChange = (otp) => {
      console.log('OTP entered:', otp);
      setUserData({otpuser:otp});



      // You can handle the OTP value here (e.g., validate it against a server, etc.)
    };
 
    const onSubmit = (values) => {




      async function fetchData() {
        try {                

          const response = await axios.get('http://localhost:8800/api/auth/otp'); // Replace the URL with the actual API endpoint you want to request.
 
            setUserData({OTP:response.data,FirstName:values.FirstName,LastName:values.LastName,DateNaissance:values.DateNaissance,NumeroTel:values.NumeroTel,Email:values.Email,NumeroCni:values.NumeroCni,NumeroSecuriteSociale:values.NumeroSecuriteSociale,Services:values.NumeroSecuriteSociale,DateRendezVous:values.DateRendezVous,Heure:values.Heure})
console.log(userData.OTP)
          
           //console.log('Code OTP:', response.data);
 const apiUrl = 'http://localhost:8800/api/auth/mail';
       const requestData = {
        Email: values.Email,
        Code: response.data
       };
       
       axios.post(apiUrl, requestData)
         .then(response => {
          // console.log('POST request successful');
          // console.log('Response data:', response.data);
         })
         .catch(error => {
          // console.error('An error occurred:', error);
         });
        } catch (error) {
          console.error('Error:', error);
        }
      }
       fetchData();  
       setActiveStep(1);

    };
const retour=()=>{
  setActiveStep(0)
}
const suivant=()=>{
 // alert(userData.OTP)
 var otpuser=document.getElementById('otp0').value+document.getElementById('otp1').value+document.getElementById('otp2').value+document.getElementById('otp3').value+document.getElementById('otp4').value+document.getElementById('otp5').value;

 if(otpuser===userData.OTP){
    setActiveStep(2)
  }else{
     toast.error("Vous devez écrire le numéro que nous vous avons envoyé par Mail !")
   }
 }

    return(
        <div className='container '>
			<div class="row my-4">
					<div class="col-lg-12">
						<div class="section-title text-center">
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
            <center>Merci </center>
          </Typography>
           
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
		  {activeStep === 0 && (
          <section class="appointment">
		  <div class="container">
			  
			  <div class="row">
				  <div class="col-lg-6 col-md-12 col-12">
				  <Formik initialValues={userData} validationSchema={validationSchema}   onSubmit={onSubmit} validateOnMount>
	  <Form >


						  <div class="row">
							  <div class="col-lg-6 col-md-6 col-12">
                <label>Nom :<b style={{color:'red'}}>*</b></label>

									   <Field  id="FirstName" name="FirstName"class="forminput"  type="text" placeholder="Nom *"/>
									  <p style={{color:'red'}}><ErrorMessage name="FirstName" />   </p>
							   </div>
							  <div class="col-lg-6 col-md-6 col-12">
                <label>Prénom :<b style={{color:'red'}}>*</b></label>

								  <div class="form-group">
									  <Field id="LastName" name="LastName"class="forminput" type="text" placeholder="Prénom *"/>
									  <p style={{color:'red'}}><ErrorMessage name="LastName"/></p>

								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
                  <label>Date de naissance :<b style={{color:'red'}}>*</b></label>

                  <Field
                id="DateNaissance"
                name="DateNaissance"
                 
               type="date"
              />

                 <p style={{ color: 'red' }}>
        <ErrorMessage name="DateNaissance" />
      </p>
  

 
   
								  
 		  
								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
                  <label>Numéro de Téléphone :<b style={{color:'red'}}>*</b></label>

								  <Field id="NumeroTel" name="NumeroTel"class="forminput" type="text" placeholder="Numéro de téléphone *"/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroTel"/></p>

									   
								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
                  <label>Services :<b style={{color:'red'}}>*</b></label>
                  <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        required
      /> 										  <p style={{color:'red'}}><ErrorMessage name="Services"/></p>

 															</div>
							  </div>

							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
                    <label>Date de Rendezvous :<b style={{color:'red'}}>*</b></label>
								  <Field name="DateRendezVous" id="DateRendezVous" type="date"
	 
	 
 	/>										  <p style={{color:'red'}}><ErrorMessage name="DateRendezVous"/></p>

								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
                <label>Mail :<b style={{color:'red'}}>*</b></label>

							   <Field id="Email" name="Email"class="forminput" type="text" placeholder="Email "/>
								  <p style={{color:'red'}}><ErrorMessage name="Email"/></p>
							   </div>
                 <div class="col-lg-6 col-md-6 col-12">
                <label>Heure :</label>

								   <Field id="Heure" name="Heure"class="forminput" type="time" placeholder="Heure *"/>
								  <p style={{color:'red'}}><ErrorMessage name="Heure"/></p>
							   </div>
							  <div class="col-lg-6 col-md-6 col-12">
                <label>Numero CNI : </label>

								  <Field id="NumeroCni" name="NumeroCni"class="forminput" type="text" placeholder="Numéro de CNI "/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroCni"/></p>
							   </div>
							  <div class="col-lg-6 col-md-6 col-12">
                <label>Numéro de sécurité sociale :</label>

								   <Field id="NumeroSecuriteSociale" name="NumeroSecuriteSociale"class="forminput" type="text" placeholder="Numéro de sécurité sociale *"/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroSecuriteSociale"/></p>
							   </div>

                
							  <div class="col-lg-12 col-md-12 col-12">
                <Field type="checkbox" id="langage1" name="condtion" value="javascript" required/>
        <label for="condtion " className='mx-2'>j'accepte que les informations saisies soient utilisées pour me recontacter</label><br/>
 							  </div>
						  </div>
						  <div class="row">
							  <div class="col-lg-5 col-md-4 col-12">
								  <div class="form-group">
									  							   <button type='submit' className='btn' >Suivant</button>

								  </div>
							  </div>
						  </div>
						  </Form></Formik>
				  </div>
				  <div class="col-lg-6 col-md-12 ">
					  <div >
						  <img src="rendez.jfif"  class="appointment-image"  alt="#"/>
					  </div>
				  </div>
			  </div>
		  </div>
	  </section>   
			 


            )}

{activeStep === 1 && (    <div class="  ">
<p className='text-center'>Nous allons envoyer un Code OTP à l'email {userData.Email}</p>
	<div class="d-flex "   style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
  <OTPInput length={6} onChange={handleOTPChange} />

			</div>
            <center className='mt-4'><button className='btn mx-4' onClick={retour}>Retour</button> <button className='btn mx-4' onClick={suivant}>Suivant</button></center>


			</div>

            )}

{activeStep === 2 && (    <div> 

<p className='text-center'>Le rendez-vous sera automatiquement annulé s'il n'est pas honoré dans les 10 minutes.</p><br/>
<b className='text-center'>Votre Ticket :</b>	 <br/>
<div >

</div>
<img src="" alt="" srcset="" />
<center><a>Télécharger Le Ticket</a></center>
<Box>
           
            
           
           <Button onClick={handleNext} className='btn p-2'>
                {activeStep === steps.length - 1 ? 'Envoyer' : 'Suivant'}
              </Button> 
            </Box>
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