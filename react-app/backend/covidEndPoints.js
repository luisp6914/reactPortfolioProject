import MongoDB from "./covidDB.js";
import express from "express";

const router = express.Router();
const db = MongoDB;

router.get("/patients", async (req, res) => {
    try {
        
        const patients = await db.getPatients();
        res.json(patients);
        
    } catch (error) {
        res.status(500).send("Error Fetching patients")
    } 
});

router.post("/patients", async (req, res) => {
    try {
        const newPatient = req.body;
        const addedPatient = await db.addPatient(newPatient);
        res.status(201).json(addedPatient);
        
    } catch (error) {
        res.status(500).send("Error Adding Patient");
    } 
});

router.get("/vaccines", async (req, res) => {
    try {
        const vaccines = await db.getVaccines();
        res.json(vaccines);
        
    } catch (error) {
        res.status(500).send("Error Fetching vaccines")
    }
});

router.post("/vaccines", async (req, res) => {
    try {
        const newVaccine = req.body;
        const addedVaccine = await db.addVaccine(newVaccine);
        res.status(201).json(addedVaccine);
        
    } catch (error) {
        res.status(500).send("Error Adding Vaccine");
    } 
});

router.post("/vaccines/:id/addDoses", async (req, res) => {
    try {
        const {vaccineId, doses} = req.body;
        const updatedVaccine = await db.addDoses(parseInt(vaccineId), doses);
        res.status(201).json(updatedVaccine);
        
    } catch (error) {
        res.status(500).send("Error adding doses");
    } 
});

router.put("/vaccines/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const updateData = req.body;
        const updatedVaccine = await db.updateVaccine(parseInt(id), updateData);
        res.status(200).json(updatedVaccine);
    } catch (error) {
        res.status(500).send("Error Updating Vaccine");
    }
})

export default router;