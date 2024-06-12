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
import bcrypt from "bcryptjs";

// Now you can access process.env.JWT_SECRET


 
export const AddUser = (req, res) => {
  //CHECK USER IF EXISTS

 // const q = "SELECT * FROM users WHERE email = ?";

 // db.query(q, [req.body.EmailAdress], (err, data) => {
   // if (err) return res.status(500).json(err);
    //if (data.length) return res.status(409).json("User already exists!");
    //CREATE A NEW USER
    //Hash the password
   // const salt = bcrypt.genSaltSync(10);//method of hash
   // const hashedPassword = bcrypt.hashSync(req.body.Password, salt);
   const confirmation='non'
    const currentDate = moment();

// Add one hour to the current date
const newDate = currentDate.add(1, 'hour');

// Format the date
const Date = newDate.format('YYYY-MM-DD HH:mm:ss');
 


    const formattedDateRendezVous = moment(req.body.DateRendezVous).format('YYYY-MM-DD');
    const formattedDateNaissance = moment(req.body.DateNaissance).format('YYYY-MM-DD');

    const q =
      "INSERT INTO `user_mobile`( `nom`, `prenom`, `mail`, `tel`, `password`,`date`) VALUE (?)";

    const values = [
      req.body.nom,
      req.body.prenom,
      req.body.mail,
      req.body.tel,
      req.body.password,

      Date,
       
     ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
 // });
};

