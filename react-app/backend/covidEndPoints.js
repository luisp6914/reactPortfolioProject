import MongoDB from "./covidDB";
import express from "express";

const router = express.Router();
const db = new MongoDB();

router.get("/patients", async (req, res) => {
    try {
        await db.connect();
        const patients = await db.getPatients();
        res.json(patients);
        await db.close();
    } catch (error) {
        res.status(500).send("Error Fetching patients")
    }
});

router.post("/patients", async (req, res) => {
    try {
        const newPatient = req.body;
        await db.connect();
        const addedPatient = await db.addPatient(newPatient);
        res.status(201).json(addedPatient);
        await db.close();
    } catch (error) {
        res.status(500).send("Error Adding Patient");
    }
});

export default router;