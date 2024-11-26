import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
import authRoutes from "./routes/auth.js";
import actRoutes from "./routes/act.js";
 import offreRoutes from "./routes/offres.js";
import GalerieRoutes from "./routes/galerie.js";
import MedecinRoutes from "./routes/medecin.js";

import AppMobileRoutes from "./routes/usermobile.js";

import cookieParser from "cookie-parser";


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });



app.use(express.json())

app.use(cors({
origin:'*',
}));

//pour inserer les cookie 
app.use(cookieParser());




app.use("/api/auth", authRoutes);
app.use("/api/act", actRoutes);
app.use("/api/offres", offreRoutes);
app.use("/api/galerie", GalerieRoutes);
app.use("/api/medecin", MedecinRoutes);

app.use("/api/usermobile", AppMobileRoutes);

// Upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images_act/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload/actualites", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'Erreur lors du téléversement du fichier' });
  }
  res.status(200).json(file.filename);
});

// Upload Galerie
let xx = "";
const storage_gal = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/galerie");
  },
  filename: function (req, file, cb) {
    xx = Date.now() + file.originalname;
    cb(null, xx);
  },
});

const uploadd = multer({ storage: storage_gal });

app.post("/api/upload/galerie", uploadd.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'Erreur lors du téléversement du fichier' });
  }
  res.status(200).json(xx);
});

// Upload Medecin
let xxx = "";
const storage_Med = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/medecin");
  },
  filename: function (req, file, cb) {
    xx = Date.now() + file.originalname;
    cb(null, xx);
  },
});

const uploaddd = multer({ storage: storage_Med });

app.post("/api/upload/medecin", uploaddd.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'Erreur lors du téléversement du fichier' });
  }
  res.status(200).json(xx);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(7700, () => {
  console.log("API working");
});
