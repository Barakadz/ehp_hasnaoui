import { db } from "../connect.js";
//import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
import moment from "moment/moment.js";
import qr  from "qrcode";
import fs from "fs";
import dotenv from 'dotenv';

// Now you can access process.env.JWT_SECRET


 
export const register = (req, res) => {
  //CHECK USER IF EXISTS

 // const q = "SELECT * FROM users WHERE email = ?";

 // db.query(q, [req.body.EmailAdress], (err, data) => {
   // if (err) return res.status(500).json(err);
    //if (data.length) return res.status(409).json("User already exists!");
    //CREATE A NEW USER
    //Hash the password
   // const salt = bcrypt.genSaltSync(10);//method of hash
   // const hashedPassword = bcrypt.hashSync(req.body.Password, salt);
    const currentDate = moment();
    const Date=currentDate.format('DD-MM-YYYY HH:mm:ss');
    const q =
      "INSERT INTO `user`( `nom`, `prenom`, `date_naissance`, `tel`, `service`, `date_rendezvous`, `mail`, `numero_cni`, `numero_securite`, `heure`, `date`) VALUE (?)";

    const values = [
      req.body.FirstName,
      req.body.LastName,
      req.body.DateNaissance,
      req.body.NumeroTel,   
      req.body.Service,

      req.body.DateRendezVous,
      req.body.Email,
      req.body.NumeroCni,
      req.body.NumeroSecuriteSociale,
      req.body.Heure,
      Date
      
     ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
 // });
};




function verifyToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, 'fdf');
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}

export const testuser = (req, res) => {  
  dotenv.config();

  const payload = { token: 'ehphasnaoui' };
  const tokenn = jwt.sign(payload,  process.env.JWT_SECRET);
  console.log(tokenn);
  jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVocGhhc25hb3VpIiwiaWF0IjoxNzE1MDk2NzUyfQ.1KKHw2v50FMTx9Ecvek0Agu7WntOrkX85rcS04kk6FM', process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('JWT verification failed');
    } else {
      console.log('Decoded payload:', decoded);
    }
  });
  



  const token = req.query.token;
  if (!token) {
    return res.status(403).json({ message: 'Missing Token' });
  }
  try {
 
    const data = jwt.verify(token, process.env.JWT_SECRET); // Use process.env.JWT_SECRET instead of PASSWORD

    // Token is valid, proceed with your existing logic to check if the user exists
    const q = "SELECT * FROM user";

    db.query(q, (err, userData) => {
      if (err) return res.status(500).json(err);
      if (userData.length > 0) {
        return res.status(200).json(userData);
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    });
  } catch (err) {
    return res.status(403).json({ message: process.env.JWT_SECRET });
  }
};






export const otpGenerate = (req, res) => {
  const OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false
  });

  return res.status(200).json(OTP);
  
};



 

export const mailSend = (req, res) => {
  var transporter = nodemailer.createTransport({
    host:'mymail.groupe-hasnaoui.com',
    port:'587',
    secure:true,
    auth:{
      user:'admin@ehp-hasnaoui.com',
      pass:'Azerty@123**'
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
   /* service: 'gmail',
    auth: {
      user: 'hasnaoui.recrutement@gmail.com',
      pass: 'iffstkiieskiwzca'
    }*/
  });
  
  var mailOptions = {
    from: 'noreply@ehp-hasnaoui.com',
    to: req.body.Email,
    subject: 'Code :',
    text: 'Code :'+req.body.Code
  };
  const Mail =transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    let msg="you should receive an email";
    return res.status(400).json( error );
  } else {
    return res.status(200).json(info.response);
    
  }
});


}



export const fdf = (req, res) => {



// Data to be encoded in the QR code
const data = 'https://example.com';

// Generate QR code as a data URL
qr.toDataURL(data, (err, url) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // Save the data URL to a file
    fs.writeFileSync('../../qrcode.png', url.split(',')[1], 'base64', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('QR code generated successfully!');
    });
});

}