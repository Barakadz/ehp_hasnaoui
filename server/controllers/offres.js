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


 
export const AddOffres = (req, res) => {
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
      "INSERT INTO `offre_emploi`( `titre`, `lieu`, `niveau_poste`, `secteur`, `diplome`, `nombre_poste`, `contrat`, `description`, `date`)   VALUE (?)";

    const values = [
      req.body.titre,
      req.body.lieu, 
      req.body.niveau_poste,
      req.body.secteur,
      req.body.diplome,
      req.body.nombre_poste,
      req.body.contrat,
      req.body.description,
      Date
     

     ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Offres d'emploi has been created.");
    });
 // });
};



export const DeleteOffres = (req, res) => {

    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  
    const q = "DELETE FROM `offre_emploi`  WHERE id = ?";
  
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
export const Offres = (req, res) => {

  


  const q = "SELECT * FROM offre_emploi  order by id desc ";

  db.query(q, (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'offres d`emploi not found' });
    }
  });


}


export const getByIdOffres = (req, res) => {

  
const id=req.params.id

  const q = "SELECT * FROM offre_emploi where id = ? ";

  db.query(q,[id], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json({ message: 'Offres d`emploi not found' });
    }
  });


}
export const UpdateOffres = (req, res) => {
    //recupére vers paramétres
    const id = req.params.id;
    //recupére vers body
   

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
  
    const q = "UPDATE `offre_emploi` SET `titre` = ?, `lieu` = ?, `niveau_poste` = ?, `secteur` = ? , `diplome` = ?, `nombre_poste` = ?, `contrat` = ?, `description` = ? , `date` = ? WHERE id = ?";
  
    db.query(q,[req.body.titre,req.body.lieu,req.body.niveau_poste, req.body.secteur,req.body.diplome,req.body.nombre_poste,req.body.contrat,req.body.description,req.body.date,id], (err, userData) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (userData.affectedRows === 0) {
        return res.status(404).json({ error: 'offres d`emploi not found' });
      }
  
      return res.status(200).json({ message: 'offres d`emploi updated successfully' });
    });

}

 