import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
import moment from "moment/moment.js";
export const register = (req, res) => {
  //CHECK USER IF EXISTS

  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.EmailAdress], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");
    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);//method of hash
    const hashedPassword = bcrypt.hashSync(req.body.Password, salt);
    const currentDate = moment();
    const Date=currentDate.format('DD-MM-YYYY HH:mm:ss');
    const q =
      "INSERT INTO users (`firstname`,`email`,`password`,`lastname`,`tel`,`date`) VALUE (?)";

    const values = [
      req.body.FirstName,
      req.body.EmailAdress,
      hashedPassword,
      req.body.LastName,
      req.body.ContactNumber,
      Date
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password //password of user in database
    );

    if (!checkPassword)
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
};

export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
};

export const otpGenerate = (req, res) => {
  const OTP = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false
  });

  return res.status(200).json(OTP);
  
};



export const testuser = (req, res) => {
  //CHECK USER IF EXISTS

  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.EmailAdress], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(200).json("User already exists!")

  })
}


export const mailSend = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hasnaoui.recrutement@gmail.com',
      pass: 'iffstkiieskiwzca'
    }
  });
  
  var mailOptions = {
    from: 'hasnaoui.recrutement@gmail.com',
    to: req.body.EmailAdress,
    subject: 'Code :',
    text: 'Code :'+req.body.Code
  };
  const Mail =transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    let msg="you should receive an email";
    return res.status(400).json( msg );
  } else {
    return res.status(200).json(info.response);
    
  }
});

}