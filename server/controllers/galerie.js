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


 
export const AddGalerie = (req, res) => {
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
      "INSERT INTO `galerie`( `image`, `type`)   VALUE (?)";

    const values = [
      req.body.image,
      req.body.type
  

     ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Galerie  has been created.");
    });
 // });
};



export const DeleteGalerie = (req, res) => {

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  // select file from bdd
  const qq = "SELECT image FROM galerie WHERE id = ?";

  db.query(qq, [id], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      const imagePath = userData[0].image;
  
      // Remove file
      fs.unlink(`../client/public/galerie/${imagePath}`, (err) => {
        if (err) {
          console.error('Error deleting the file:', err);
          return res.status(500).json({ message: 'Error deleting the file', error: err });
        }
        console.log('File deleted successfully');
        return res.status(200).json({ message: 'File deleted successfully', userData });
      });
    } else {
      return res.status(404).json({ message: 'Galerie not found' });
    }
  });
  



//remove from bdd
    const q = "DELETE FROM `galerie`  WHERE id = ?";
  
    db.query(q, [id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'Actualités not found' });
      }
  
      return res.status(200).json({ message: 'Actualités deleted successfully' });
    });
}
export const Galerie = (req, res) => {

  


  const q = "SELECT * FROM galerie  order by id desc ";

  db.query(q, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Galerie  not found' });
    }
  });


}


export const getByIdGalerie = (req, res) => {

  
const id=req.params.id

  const q = "SELECT * FROM galerie where id = ? ";

  db.query(q,[id], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Galerie  not found' });
    }
  });


}
export const UpdateGalerie = (req, res) => {
    //recupére vers paramétres
    const id = req.params.id;
    //recupére vers body
   

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

  
    // Delete the file
    fs.unlink(`../client/public/galerie/${req.body.imagePrecedent}`, (err) => {
      if (err) {
        console.error('Error deleting the file:', err);
        return;
      }
      console.log('File deleted successfully');
    });
    
    
    const q = "UPDATE `galerie` SET `image` = ?, `type` = ?  WHERE id = ?";
  
    db.query(q,[req.body.image,req.body.type,id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'Galerie not found' });
      }
  
      return res.status(200).json({ message: 'Galerie updated successfully' });
    });

}

 