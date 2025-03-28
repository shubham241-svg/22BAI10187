import express from 'express';
import cors from 'cors';
import userRoute from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log("server running on port ", PORT )
})