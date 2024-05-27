import { faMagnifyingGlass, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

function Widgets(){
    const location = useLocation();
    const currentPath = location.pathname;

    const vaccineButtons = [
        <button key="add-vaccine" className="btn btn-primary add-vaccine-btn"><FontAwesomeIcon icon={faPlus} /> Vaccine</button>,
        <button key="add-dose" className="btn add-dose-dtn" style={{background: "orange", color: "#fff"}}><FontAwesomeIcon icon={faPlus} /> Dose</button>
    ];

    let patientButton = <button className="btn btn-primary add-patient-btn"> <FontAwesomeIcon icon={faPlus} /> Patients</button>;

    return(
        <>
            <div className="widget-largeScreen">
                {currentPath === "/covid-project/patients" ?  patientButton  : vaccineButtons}
                
                <form className="d-flex" role="search" action="">
                    <div className="input-group">
                        <input className="form-control"  type="search" placeholder="Name | ID#" aria-label="Search"/>
                        <button className="btn btn-primary" type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                    </div>
                </form>
            </div>
            <div className="widget-mediumScreen">
                <h3>test</h3>
            </div>
        </>
    );
}

export default Widgets;