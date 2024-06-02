import dotenv from 'dotenv';
import {MongoClient} from 'mongodb'
class MongoDB {
    
    constructor(){
        //Loading the evironmnent Variables from .env file
        dotenv.config();
        const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
        this.mongoURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
        this.client = new MongoClient(this.mongoURL);
        this.db = null;
    }

    /**
     * Opens a connection to the MongoDB database
     */
    async connect(){
        if (!this.db) {
          try {
            await this.client.connect();
            this.db = this.client.db();
            console.log("Connected to MongoDB\n");
          } catch (error) {
            console.error("Error connecting to MongoDB:", error);
          }
        }
    }
    /**
     * Closes the connection to the MongoDB database.
     */
    async close(){
        try {
            await this.client.close();
            this.db = null;
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
            const counteCollection = this.db.collection("patientsCounter")

            //Getting the next ID value 
            const counter = await counteCollection.findOneAndUpdate(
                {_id: "patientId"},
                {$inc: { current: 1 }},
                {returnOriginal: false, upsert: true}
            );

            patientData.id = counter.value.current;

            const result = await collection.insertOne(patientData);
            return result.ops[0];
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    }
    /**
     * Will get the vaccines from mongoDB
     * @returns Will return an array of all the vaccines available. 
     */
    async getVaccines(){
        try {
            const vaccines = await this.db.collection("vaccines").find().toArray();
            return vaccines;
        } catch (error) {
            console.error("Error getting vaccines:", error)
        }
    }
    /**
     * This will insert a new vaccine to the mongoDB
     * @param {*} newVaccine 
     * @returns 
     */
    async addVaccine(newVaccine){
        try {
            //Getting the current count for ID
            console.log("This is a test")
            const counter = await this.db.collection("vaccinesCounter").findOneAndUpdate(
                { id: 'vaccineId' },
                { $inc: { current: 1 } },
                { returnOriginal: false, upsert: true }
            );
            console.log(counter.value.current);
            //adding the updated count id to the vaccine
            newVaccine.id = counter.value.current;
            console.table(newVaccine);
            await this.db.collection("vaccines").insertOne(newVaccine);
            return newVaccine;
        } catch (error) {
            console.error("Error adding vaccine:", error);
        }
    }

    async addDoses(vaccineId, doses){
        try {
            const collection = this.db.collection("vaccines");
            const result = await collection.findOneAndUpdate(
                {id: vaccineId},
                {
                    $inc: {dosesReceived: doses, dosesRemaining: doses}
                },
                {returnOriginal: false}
            );
            return result.value;
        } catch (error) {
            console.error('Error adding doses:', error);
        }
    }

    async updateVaccine(vaccineId, updateData){
        try {
            const collection = this.db.collection("vaccine");
            const result = await collection.findOneAndUpdate(
                {id: vaccineId},
                {$set: updateData},
                {returnOriginal: false}
            );
            return result.value;
        } catch (error) {
            console.error('Error updating vaccine:', error);
        }
    }
    
}
const db = new MongoDB();
db.connect();
export default db;