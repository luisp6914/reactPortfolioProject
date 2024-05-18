import "./covid-project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser, faSyringe } from "@fortawesome/free-solid-svg-icons";
function Covid() {
  return (
    <div className="covidDashboard">
      <div className="patientOption">
        <h1> <FontAwesomeIcon icon={faHospitalUser}/> </h1>
        <a className="btn btn-primary rounded-pill" href="/covid-project/patients">Patient Portal</a>
        <p>Manage all your patient information</p>
      </div>
      <div className="vaccineOption">
        <h1> <FontAwesomeIcon icon={faSyringe}/> </h1>
        <a className="btn btn-primary rounded-pill" href="/covid-project/vaccines">Vaccine Portal</a>
        <p>Manage all your Vaccine information</p>
      </div>
    </div>
  );
}

export default Covid;
