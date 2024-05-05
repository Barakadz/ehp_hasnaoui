import  express  from "express";
const app=express();

import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"

/*import commentRoutes from "./routes/comments"
import likeRoutes from "./routes/likes.js"
import userRoutes from "./routes/users.js"
*/
import cors from "cors"
import cookieParser from "cookie-parser";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});


app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser())
//middlewares
//pour send json object , response of api(mstatus)
app.use(express.json());
//-

app.use("/api/auth",authRoutes)
app.use("/api/posts",postRoutes)

/*
app.use("/api/users",userRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/likes",likeRoutes)
*/ 


app.listen(8800, () => {
    console.log("API working!");
  });