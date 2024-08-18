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

  const onSubmit = async (e,values) => {
    e.preventDefault();

    setUserAdmin({ username: values.username, password: values.password });
    try {      //https://ehp-hasnaoui.com/api/auth/login
      const requestData = {
        username: values.username,
        password: values.password,
      };
      await axios.post("http://localhost:8800/api/auth/login", requestData);
      router.push('/admin');
    } catch (err) {
      setErr(err.response.data);
    }
   
  };


  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
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
