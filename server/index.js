import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
import authRoutes from "./routes/auth.js";
import actRoutes from "./routes/act.js";
 import offreRoutes from "./routes/offres.js";
import GalerieRoutes from "./routes/galerie.js";


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });


const allowedOrigins = ["*", "*"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl)
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors({
origin:'*',
}));
app.use(express.json())
app.use("/api/auth", authRoutes);
app.use("/api/act", actRoutes);
app.use("/api/offres", offreRoutes);
app.use("/api/galerie", GalerieRoutes);


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
    cb(null, "../client/public/");
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(8800, () => {
  console.log("API working");
});
