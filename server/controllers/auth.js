import { db } from "../connect.js";
//import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

//import otpGenerator from 'otp-generator';
//import nodemailer from 'nodemailer';
import moment from "moment/moment.js";
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
      "INSERT INTO `user`( `nom`, `prenom`, `date_naissance`, `tel`, `service`, `date_time`, `email`, `date`) VALUE (?)";

    const values = [
      req.body.FirstName,
      req.body.LastName,
      req.body.DateNaissance,
      req.body.NumeroTel,
      req.body.Services,
      Date,
      req.body.Email,    

      req.body.NumeroCni,
      req.body.NumeroSecuriteSociale
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
  const secretKey ="8318d02bdb11e961e205171f0027ee98e25fbb82056ff2c174e6f342c72961ff";

  // Extract the token from the Authorization header
  const token = req.query.token;
  if (!token) return res.status(401).send('Access denied. No token provided.');

  // Verify the token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(400).send(err);

    // Token is valid, proceed with your existing logic to check if the user exists
    const q = "SELECT * FROM user";

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(200).json(data);
    });
  });
};