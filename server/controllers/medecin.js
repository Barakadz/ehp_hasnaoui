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


 
export const AddMedecin = (req, res) => {
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
      "INSERT INTO `medecin`( `username`, `poste`, `valeur`, `type`, `image`)   VALUE (?)";

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



export const DeleteMedecin = (req, res) => {

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  // select file from bdd
  const qq = "SELECT image FROM medecin WHERE id = ?";

  db.query(qq, [id], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      const imagePath = userData[0].image;
  
      // Remove file
      fs.unlink(`../../client/public/medecin/${imagePath}`, (err) => {
        if (err) {
          console.error('Error deleting the file:', err);
          return res.status(500).json({ message: 'Error deleting the file', error: err });
        }
        console.log('File deleted successfully');
        return res.status(200).json({ message: 'File deleted successfully', userData });
      });
    } else {
      return res.status(404).json({ message: 'Medecin not found' });
    }
  });
  



//remove from bdd
    const q = "DELETE FROM `medecin`  WHERE id = ?";
  
    db.query(q, [id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'Medecin not found' });
      }
  
      return res.status(200).json({ message: 'Medecin deleted successfully' });
    });
}
export const Medecin = (req, res) => {

  


  const q = "SELECT * FROM medecin  order by id desc ";

  db.query(q, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Medecin  not found' });
    }
  });


}


export const getByIdMedecin = (req, res) => {

  
const id=req.params.id

  const q = "SELECT * FROM medecin where id = ? ";

  db.query(q,[id], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Medecin  not found' });
    }
  });


}
export const UpdateMedecin = (req, res) => {
    //recupére vers paramétres
    const id = req.params.id;
    //recupére vers body
   

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

  
    // Delete the file
    fs.unlink(`../client/public/medecin/${req.body.imagePrecedent}`, (err) => {
      if (err) {
        console.error('Error deleting the file:', err);
        return;
      }
      console.log('File deleted successfully');
    });
    
    
    const q = "UPDATE `medecin` SET `image` = ?,`valeur` = ?,`poste` = ?,`username` = ?, `type` = ?  WHERE id = ?";
  
    db.query(q,[req.body.image,req.body.valeur,req.body.poste,req.body.username,req.body.type,id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'Medecin not found' });
      }
  
      return res.status(200).json({ message: 'Medecin updated successfully' });
    });

}

 