import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Rendezvous=()=>{
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (date) => {
      setSelectedDate(date);
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
    return(
        <div>
<section class="appointment">
			<div class="container">
				<div class="row">
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
				<div class="row">
					<div class="col-lg-6 col-md-12 col-12">
						<form class="form" action="#">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Nom *"/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Prénom *"/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
 										<DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"

         
        placeholderText="Dat de naissance"
      />						
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Prénom"/>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
                                    
                                    <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy h:mm aa"

        showTimeSelect  
              timeInputLabel="Heure"

        timeFormat="HH:mm"
        placeholderText="Select date and time"
      />									</div>
								</div>

								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
                                    <Select options={options} closeMenuOnSelect={false} isMulti  
      components={animatedComponents} placeholder="Services *"
     />
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<div class="nice-select form-control wide" tabindex="0"><span class="current">Department</span>
											<ul class="list">
												<li data-value="1" class="option selected ">Department</li>
												<li data-value="2" class="option">Cardiac Clinic</li>
												<li data-value="3" class="option">Neurology</li>
												<li data-value="4" class="option">Dentistry</li>
												<li data-value="5" class="option">Gastroenterology</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<div class="nice-select form-control wide" tabindex="0"><span class="current">Doctor</span>
											<ul class="list">
												<li data-value="1" class="option selected ">Doctor</li>
												<li data-value="2" class="option">Dr. Akther Hossain</li>
												<li data-value="3" class="option">Dr. Dery Alex</li>
												<li data-value="4" class="option">Dr. Jovis Karon</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input type="text" placeholder="Date" id="datepicker"/>
									</div>
								</div>
								<div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<textarea name="message" placeholder="Write Your Message Here....."></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-5 col-md-4 col-12">
									<div class="form-group">
										<div class="button">
											<button type="submit" class="btn">Book An Appointment</button>
										</div>
									</div>
								</div>
								<div class="col-lg-7 col-md-8 col-12">
									<p>( We will be confirm by an Text Message )</p>
								</div>
							</div>
						</form>
					</div>
					<div class="col-lg-6 col-md-12 ">
						<div >
							<img src="rendez.jfif"  class="appointment-image"  alt="#"/>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}

export default Rendezvous;