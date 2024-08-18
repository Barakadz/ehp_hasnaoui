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


 
export const AddActualites = (req, res) => {
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
      "INSERT INTO `actualites`( `titre`, `description`, `type`, `date`, `image`)  VALUE (?)";

    const values = [
      req.body.titre,
      req.body.description,
      req.body.type,

      Date,
      req.body.image

     ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Actualités has been created.");
    });
 // });
};



export const DeleteActualites = (req, res) => {

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  
    const q = "DELETE FROM `actualites`  WHERE id = ?";
  
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
export const Actualites = (req, res) => {

  


  const q = "SELECT * FROM actualites  order by id desc limit 3";

  db.query(q, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Actualites not found' });
    }
  });


}

export const derActualites = (req, res) => {

  


  const q = "SELECT * FROM actualites  order by id desc limit 1";

  db.query(q, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Actualites not found' });
    }
  });


}

export const derTroisActualites = (req, res) => {

  


  const q = "SELECT * FROM actualites  order by id desc limit 3";

  db.query(q, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Actualites not found' });
    }
  });


}

export const getByIdActualites = (req, res) => {

  
const id=req.params.id

  const q = "SELECT * FROM actualites where id = ? ";

  db.query(q,[id], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Actualites not found' });
    }
  });


}
export const UpdateActualites = (req, res) => {
    //recupére vers paramétres
    const id = req.params.id;
    //recupére vers body
    const values = [
        req.body.titre,
        req.body.description,
        req.body.date,
        req.body.image,
        req.body.type,
        id
  
       ];

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  
    const q = "UPDATE `actualites` SET `titre` = ?, `description` = ?, `date` = ?, `image` = ? , `type` = ? WHERE id = ?";
  
    db.query(q,[req.body.titre,req.body.description,req.body.date, req.body.image, req.body.type,id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'Actualites not found' });
      }
  
      return res.status(200).json({ message: 'Actualites updated successfully' });
    });

}

 