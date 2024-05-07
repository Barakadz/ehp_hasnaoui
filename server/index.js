import express from "express"
import cors from "cors"

const app =express();
import authRoutes from "./routes/auth.js"


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



app.listen(8800,()=>{
    console.log("API working")
});



