import dotenv from 'dotenv';
import {MongoClient} from 'mongodb'
class MongoDB {
    
    constructor(){
        //Loading the evironmnent Variables from .env file
        dotenv.config();
        const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
        this.mongoURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
        this.client = new MongoClient(this.mongoURL);
        this.db;
    }

    /**
     * Opens a connection to the MongoDB database
     */
    async connect(){
        try {
            await this.client.connect();
            this.db = this.client.db();
            console.log("Connected to MongoDB\n") 
        } catch (error) {
            console.error(error);
        }
    }
    /**
     * Closes the connection to the MongoDB database.
     */
    async close(){
        try {
            await this.client.close();
            console.log("\nConnection to Mongo DB Closed")
        } catch (error) {
            console.error(error);
        }
    }
    /**
     * Gets all the patients in the DB
     * @returns Return all the patients in an array
     */
    async getPatients(){
        try {
            const collection = this.db.collection("patients");
            const patients = await collection.find().toArray();
            return patients;
        } catch (error) {
            console.error('Error getting patients:', error);
        }
    }
    /**
     * Adds a new patient to the DB
     * @param {*} patientData The patient data to add
     * @returns 
     */
    async addPatient(patientData){
        try {
            const collection = this.db.collection("patients");
            const counteCollection = this.db.collection("patientCounter")

            //Getting the next ID value 
            const counter = await counteCollection.findOneAndUpdate(
                {_id: "patientId"},
                {$inc: { sequence_value: 1 }},
                {returnOriginal: false, upsert: true}
            );

            patientData.id = counter.value.sequence_value;

            const result = await collection.insertOne(patientData);
            return result.ops[0];
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    }
    
}

export default MongoDB;