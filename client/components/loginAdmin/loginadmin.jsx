import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AdminContext from '@/contexts/AdminContext.js';

const LoginAdmin = () => {
  const { userAdmin, setUserAdmin } = useContext(AdminContext);
  const router = useRouter();

  const initialValues = {
    username: userAdmin.username || '',
    password: userAdmin.password || '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Il faut remplir votre Username'),
    password: Yup.string().required('Il faut remplir Votre Password'),
  });

  const onSubmit = async (values) => {
    setUserAdmin({ username: values.username, password: values.password });

    try {
        const apiUrl = 'https://ehp-hasnaoui.com/api/auth/login';
        const requestData = {
          username: values.username,
          password: values.password,
        };
  
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('POST request successful');
        console.log('Response data:', data);
  
        // Traitez la réponse ici (par exemple, en stockant le token d'authentification ou en redirigeant l'utilisateur)
       // toast.success('Login successful!');

        router.push('/admin'); // Redirection après connexion réussie
      } catch (error) {
        console.error('An error occurred:', error);
        toast.error('Username or Password');
      }
  };

  return (
    <>
      <section className="containerAdmin">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">Se Connecter</h1>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
              <Form>
                <Field id="username" name="username" className="form-control" type="text" placeholder="Username *" />
                <p style={{ color: 'red' }}>
                  <ErrorMessage name="username" />
                </p>

                <Field id="password" name="password" className="form-control" type="password" placeholder="Password *" />
                <p style={{ color: 'red' }}>
                  <ErrorMessage name="password" />
                </p>

                <button className="opacity" type="submit">
                  Se connecter
                </button>
              </Form>
            </Formik>
            <p className="opacity text-center" style={{ whiteSpace: 'nowrap' }}>
              Développer par Devops <br />
              DSI&copy; 2024
            </p>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>

      <ToastContainer />
    </>
  );
};

export default LoginAdmin;
