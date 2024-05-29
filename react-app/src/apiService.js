//This file will handle the routing for the backend logic
import axios from "axios"

const baseURL = "http://localhost:5000/api";

export const getPatients = async () =>{
    try {
        const response = await axios.get(`${baseURL}/patients`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch patients", error);
    }
};

export const addPatient = async (patientData) => {
    try {
        const response = await axios.post(`${baseURL}/patients`, patientData);
        return response.data;
    } catch (error) {
        console.error("Failed to add patient", error);
    }
}
