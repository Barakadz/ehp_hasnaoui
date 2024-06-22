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


 
export const AdduserMobile = (req, res) => {
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
    const Date=currentDate.format('DD/MM/YYYY');
  
    const q =
      "INSERT INTO `user_ehph`( `nom`, `prenom`, `mail`, `telephone`, `password`, `password`)   VALUE (?)";

    const values = [
      req.body.username,
      req.body.poste,
      req.body.valeur,
      req.body.type,
      req.body.image

     ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Medecin  has been created.");
    });
 // });
};



export const DeleteuserMobile = (req, res) => {

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  
  



//remove from bdd
    const q = "DELETE FROM `user_ehph`  WHERE id = ?";
  
    db.query(q, [id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully' });
    });
}
export const userMobile = (req, res) => {

  


  const q = "SELECT * FROM user_ehph  order by id desc ";

  db.query(q, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'User  not found' });
    }
  });


}


export const getByIduserMobile = (req, res) => {

  
const id=req.params.id

  const q = "SELECT * FROM user_ehph where id = ? ";

  db.query(q,[id], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'User  not found' });
    }
  });


}
export const UpdateuserMobile = (req, res) => {
    //recupére vers paramétres
    const id = req.params.id;
    //recupére vers body
   

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

  
  
    
    const q = "UPDATE `user_ehph` SET `nom` = ?,`prenom` = ?,`mail` = ?,`telephone` = ? , `users_approuve` = ? WHERE id = ?";
  
    db.query(q,[req.body.nom,req.body.prenom,req.body.mail,req.body.telephone,req.body.users_approuve,id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User updated successfully' });
    });

}

 