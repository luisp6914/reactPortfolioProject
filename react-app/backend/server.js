import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import db from "./covidDB.js"
import router from "./covidEndPoints.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", router)

app.listen(PORT, async () => {
    await db.connect();
    console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
    await db.close();
    process.exit(0);
});