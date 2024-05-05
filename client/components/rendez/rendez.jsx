import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

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

  /* formik */

    const initialValues={
        FirstName:userData.FirstName,
        LastName:userData.LastName,
  /*   DateNaissance:userData.DateNaissance,
        NumeroTel:userData.NumeroTel,
		Services:userData.Services,
		DateRendezVous:userData.DateRendezVous,
		Email:userData.Email,
		NumeroCni:userData.NumeroCni,
		NumeroSecuriteSociale:userData.NumeroSecuriteSociale

*/


    }
    const validationSchema = Yup.object().shape({
       FirstName:Yup.string().required('Il faut remplir votre Nom'),
	  // Services:Yup.string().required('Il faut remplir votre Service qui vous souhaité consulter'),

       LastName:Yup.string().required('Il faut remplir Votre Prénom'),
	 //  DateNaissance:Yup.string().required('Il faut remplir Votre Date de Naissance'),
	/*   NumeroCni: Yup.number().typeError('Numéro CNI doit être un nombre').test('len', 'Numéro Cni doit etre un nombre de 18 chiffres', val => val && val.toString().length === 18)
	   ,
		NumeroSecuriteSociale:Yup.string().required('Il faut remplir Votre Numéro Sécurité Sociale'),

     Email:Yup.string().email('invalid Mail format').required('Il faut remplir Votre Mail'),
       NumeroTel:Yup.string()
        .matches(
          /^[0-9]{10}$/,
          'Numéro de téléphone doit étre 10 numbers'
        )
        .required('Il faut remplir votre Numéro de Téléphone')*/
    })

    const handleOTPChange = (otp) => {
      console.log('OTP entered:', otp);
      // You can handle the OTP value here (e.g., validate it against a server, etc.)
    };
 
    const onSubmit = (values) => {

      setUserData({FirstName:values.FirstName})
      
      setActiveStep(1);
    };
const retour=()=>{
  setActiveStep(0)
}
const suivant=()=>{
  setActiveStep(2)
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
									   <Field  id="FirstName" name="FirstName"class="forminput"  type="text" placeholder="Nom *"/>
									  <p style={{color:'red'}}><ErrorMessage name="FirstName" />   </p>
							   </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
									  <Field id="LastName" name="LastName"class="forminput" type="text" placeholder="Prénom *"/>
									  <p style={{color:'red'}}><ErrorMessage name="LastName"/></p>

								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
							   
									   <DatePicker
									  class="forminput"
	  selected={datenaissance}
	  onChange={handleChangeDateNaissance}
	  dateFormat="dd/MM/yyyy"
	   
	  placeholderText="Date de naissance *"
	/>			
 		  
								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
								  <Field id="NumeroTel" name="NumeroTel"class="forminput" type="text" placeholder="Numéro de téléphone *"/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroTel"/></p>

									   
								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
								  <Select options={options} closeMenuOnSelect={false} isMulti  
	components={animatedComponents} placeholder="Services *" class="forminput" 
   />
								 

															</div>
							  </div>

							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
								  <DatePicker
	  selected={dateRendezVous}
	  onChange={handleChangeDateRendezVous}
	  dateFormat="dd/MM/yyyy h:mm aa"

	  showTimeSelect  
			timeInputLabel="Heure"

	  timeFormat="HH:mm"
	  placeholderText="Date et l'heure souhaité *"
	/>		
								  </div>
							  </div>
							  <div class="col-lg-6 col-md-6 col-12">
							   <Field id="Email" name="Email"class="forminput" type="text" placeholder="Email "/>
								  <p style={{color:'red'}}><ErrorMessage name="Email"/></p>
							   </div>
							  <div class="col-lg-6 col-md-6 col-12">
								  <Field id="NumeroCni" name="NumeroCni"class="forminput" type="text" placeholder="Numéro de CNI "/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroCni"/></p>
							   </div>
							  <div class="col-lg-6 col-md-6 col-12">
								   <Field id="NumeroSecuriteSociale" name="NumeroSecuriteSociale"class="forminput" type="text" placeholder="Numéro de la Carte Identité *"/>
								  <p style={{color:'red'}}><ErrorMessage name="NumeroSecuriteSociale"/></p>
							   </div>
							  <div class="col-lg-12 col-md-12 col-12">
								  
							  </div>
						  </div>
						  <div class="row">
							  <div class="col-lg-5 col-md-4 col-12">
								  <div class="form-group">
									  							   <button type='submit'  >Suivant</button>

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

{activeStep === 2 && (    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 

<p></p>	 
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

        </div>
    )
}

export default Rendezvous;