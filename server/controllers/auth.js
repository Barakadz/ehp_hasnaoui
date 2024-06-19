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
   const confirmation='non'
    const currentDate = moment();

// Add one hour to the current date
const newDate = currentDate.add(1, 'hour');

// Format the date
const Date = newDate.format('YYYY-MM-DD HH:mm:ss');
 


    const formattedDateRendezVous = moment(req.body.DateRendezVous).format('YYYY-MM-DD');
    const formattedDateNaissance = moment(req.body.DateNaissance).format('YYYY-MM-DD');

    const q =
      "INSERT INTO `user`( `nom`, `prenom`, `date_naissance`, `tel`, `service`, `date_rendezvous`, `mail`, `numero_cni`, `numero_securite`, `heure`, `date`,`confirmation`) VALUE (?)";

    const values = [
      req.body.FirstName,
      req.body.LastName,
      formattedDateNaissance,
      req.body.NumeroTel,   
      req.body.Service,

      formattedDateRendezVous,
      req.body.Email,
      req.body.NumeroCni,
      req.body.NumeroSecuriteSociale,
      req.body.Heure,
      Date,
      confirmation
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


export const updateConfirmation = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  const q = "UPDATE `user` SET `confirmation` = 'oui' WHERE id = ?";

  db.query(q, [id], (err, userData) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (userData.affectedRows === 0) {
      return res.status(404).json({ error: 'Rendezvous not found' });
    }

    return res.status(200).json({ message: 'Rendezvous updated successfully' });
  });
};


export const deleteRendezvous = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  const q = "DELETE FROM `user`  WHERE id = ?";

  db.query(q, [id], (err, userData) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (userData.affectedRows === 0) {
      return res.status(404).json({ error: 'Rendezvous not found' });
    }

    return res.status(200).json({ message: 'Rendezvous deleted successfully' });
  });
};



export const testuser = (req, res) => {  
  dotenv.config();

  const payload = { token: 'ehphasnaoui' };
  const tokenn = jwt.sign(payload,  process.env.JWT_SECRET);
  //console.log(tokenn);
  //get token from user
  const token = req.query.token;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(500).json('verification failed');
    } else {
      const last_date = req.query.last_date;

if (!last_date) {
  const q = "SELECT * FROM user ORDER BY id DESC";

  db.query(q, (err, userData) => {
    if (err) return res.status(500).json(err);
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json([]);
    }
  });
} else {
 
  const last_date = req.query.last_date;


  const q = "SELECT * FROM user WHERE date >  ? and date != ?";

  db.query(q, [last_date,last_date], (err, userData) => {
    if (err) {
      return res.status(500).json({ message: "Erreur de base de données", error: err });
    }
  
    if (userData.length > 0) {
      return res.status(200).json(userData);
    } else {
      return res.status(404).json([]);
    }
  });
 }

        // Token is valid, proceed with your existing logic to check if the user exists
     /* const q = "SELECT * FROM user";

      db.query(q, (err, userData) => {
        if (err) return res.status(500).json(err);
        if (userData.length > 0) {
          return res.status(200).json(userData);
        } else {
          return res.status(404).json({ message: 'User not found' });
        }
      });
  */
    }
  });
  


 
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
     service: 'gmail',
    auth: {
      user: 'hasnaoui.recrutement@gmail.com',
      pass: 'iffstkiieskiwzca'
    } 
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








export const addAct = (req, res) => {
 
     const currentDate = moment();
    const Date=currentDate.format('DD-MM-YYYY');
    const q =
      "INSERT INTO `actualites`( `titre`, `description`, `date`, `image`) VALUE (?)";

    const values = [
      req.body.titre,
      req.body.description,
Date,
      req.body.image,
 
       
     ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Actualites has been created.");
    });
 
};

export const deleteAct =(req,res)=>{
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const actualitesId = req.params.id;
    const q = "DELETE FROM actualites WHERE `id` =  ";

    db.query(q, [actualitesId ], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) return res.json("Actualites has been deleted!");
     });
  }); 
}





//generateSHA1Hash pour le password
function generateSHA1Hash(data) {
  const hash = crypto.createHash('sha1');
  hash.update(data);
  return hash.digest('hex');
}

export const login = (req, res) => {

  const q = "SELECT * FROM  admin WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");
    const passwordcrypti = generateSHA1Hash(req.body.password);

    if (data[0].password!=passwordcrypti)
      return res.status(400).json("Wrong password or username!");
    const token = jwt.sign({ id: data[0].id }, "secretkey");
//gela3na password mel others, others raha fiha les informatin nta3e user sauf password
    const { password,date, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });



/*

  const q = "SELECT * FROM admin WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Admin not found!");
   const passwordcrypti = generateSHA1Hash(req.body.password);
   
   

    if (data[0].password!=passwordcrypti)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];
 
    res
      .cookie("accessTokenAdmin", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });*/
};
 





export const logout = (req, res) => {
  res.clearCookie("accessTokenAdmin",{
    secure:true,
    sameSite:"none"
  }).status(200).json("Admin has been logged out.")
};