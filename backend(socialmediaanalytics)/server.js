import express from 'express';
import cors from 'cors';
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js"; 

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use("/posts", postRoute);
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("server running on port ", PORT )
})