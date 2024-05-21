import express from "express"
import cors from "cors"
import multer from "multer";

const app =express();
import authRoutes from "./routes/auth.js"
import actRoutes from "./routes/act.js"
import offreRoutes from "./routes/offres.js"
import GalerieRoutes from "./routes/galerie.js"


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  
  
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
app.use(express.json())
app.use("/api/auth",authRoutes)

app.use("/api/act",actRoutes)

app.use("/api/offres",offreRoutes)
app.use("/api/galerie",GalerieRoutes)


//upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "https://www.ehp-hasnaoui.com/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload/actualites", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

//upload Galerie
const storage_gal = multer.diskStorage({
  destination: function (req, file, cb) {
    //ficheir
    cb(null, "https://www.ehp-hasnaoui.com/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname);
  },
});

const uploadd = multer({ storage: storage_gal });

app.post("/api/upload/galerie", uploadd.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});




app.listen(8800,()=>{
    console.log("API working")
});



