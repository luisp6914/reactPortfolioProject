declare module "../../apiService"{
    export function getPatients(): Promise<any>;
    export function addPatient(patientData: any): Promise<any>;
}