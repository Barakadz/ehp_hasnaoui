import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const LoginAdmin=()=>{
    const router = useRouter();

    const [username, setUsername] = useState(''); // Initial state is an empty string
    const handleInputChangeUsername = (e) => {
        setUsername(e.target.value);
      };
      const [password, setPassword] = useState(''); // Initial state is an empty string
      const handleInputChangePassword = (e) => {
        setPassword(e.target.value);
        };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestData = {
                username: username,
                password: password
               
             
             
               };
          const response = await axios.post('https://www.ehp-hasnaoui.com/api/auth/login', requestData);
          toast.success(response.data);
          router.push('/admin');


        } catch (error) {
           toast.error(error);
        }
      };
    return(
        <>
        <section class="containerAdmin">
        <div class="login-container">
            <div class="circle circle-one"></div>
            <div class="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
                <h1 class="opacity">Se Connecter</h1>
                <form onSubmit={handleSubmit}>
                    <label>username :</label>
                    <input type="text" placeholder="USERNAME"value={username}  onChange={handleInputChangeUsername} maxLength={37} required/>
                    <label>password :</label>

                    <input type="password" placeholder="PASSWORD"value={password} onChange={handleInputChangePassword}maxLength={40} required/>
                    <button class="opacity" type="submit">Se connecter</button>
                </form>
               <p class="opacity text-center" style={{whiteSpace:'nowrap'}}>Développer par Baraka Devops  <br></br>DSI&copy; 2024</p>
            </div>
            <div class="circle circle-two"></div>
        </div>
        <div class="theme-btn-container"></div>
    </section>

    <ToastContainer />

        </>
    )
}

export default LoginAdmin;