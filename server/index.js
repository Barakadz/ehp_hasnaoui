import express from "express"
const app =express();
import authRoutes from "./routes/auth.js"


app.use(express.json())
app.use("/api/auth",authRoutes)



app.listen(8800,()=>{
    console.log("API working")
});