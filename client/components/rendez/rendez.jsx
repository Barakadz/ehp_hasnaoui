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
        .required('Il faut remplir votre Numéro de Téléphone')
    })

    const handleOTPChange = (otp) => {
      console.log('OTP entered:', otp);
      setUserData({otpuser:otp});



      // You can handle the OTP value here (e.g., validate it against a server, etc.)
    };
 
    const onSubmit = (values) => {

      const cookieValue = getCookie('EHPH');
      if (cookieValue) {
        toast.error('Vous avez déja réserver un Rendezvous ');
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
 DateNaissance:userData.DateNaissance,
 NumeroTel:userData.NumeroTel,
 Service:value/*userData.Services*/,
 DateRendezVous:userData.DateRendezVous,
 Email:userData.Email,
 NumeroCni:userData.NumeroCni,
 NumeroSecuriteSociale:userData.NumeroSecuriteSociale,
 Heure:userData.Heure


};

axios.post(apiUrl, requestData )
  .then(response => {
   toast.success('Rendezvous à été planifier pour :'+value)
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

									   <Field  id="FirstName" name="FirstName"class="forminput" style={{textTransform:'uppercase'}} type="text" placeholder="Nom *"/>
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

               max={maxDate}
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
        isMulti
        required
      />
 				  <p style={{color:'red'}}><ErrorMessage name="Services"/></p>

 															</div>
							  </div>

							  <div class="col-lg-6 col-md-6 col-12">
								  <div class="form-group">
                    <label>Date de Rendezvous :<b style={{color:'red'}}>*</b></label>
								  <Field name="DateRendezVous" id="DateRendezVous" type="date"
	 
	 min={minDate}
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

                
                 <div class="col-lg-12 col-md-12 col-12 d-flex mb-2">
  <Field type="checkbox" className="custom-checkbox" id="langage1" name="langage1" value="javascript"min="2024-05-01" required/>
<label for="langage1"className='mx-2 textwrap'  >  &nbsp;&nbsp;j'accepte que les informations saisies soient utilisées pour me recontacter</label><br/>
  </div>
 </div>						  <div class="row">
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

 
        </React.Fragment>
      )}
    </Box>
    <ToastContainer />

        </div>
    )
}

export default Rendezvous;