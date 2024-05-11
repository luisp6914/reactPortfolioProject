import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL } from "@fortawesome/free-solid-svg-icons";
import "./components.css";

//PascalCasing for components
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="logo">
            <FontAwesomeIcon icon={faL} />
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/**Home Tab */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/**About me Tab */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            {/**Project Tab */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            {/**Resume Tab */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            {/**Contact Tab */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
