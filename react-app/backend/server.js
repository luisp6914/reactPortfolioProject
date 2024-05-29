import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./covidEndPoints"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/patients", router)

app.listen(PORT, () =>{
    console.log(`Server Running on port ${PORT}`);
});