import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL } from "@fortawesome/free-solid-svg-icons";

//PascalCasing for components
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        {/*Logo */}
        <a className="navbar-brand" href="#">
          <span className="logo">
            <FontAwesomeIcon icon={faL} />
          </span>
        </a>

        {/**Nav button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/*Home Tab */}
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>

            {/*About Tab */}
            <a className="nav-link" href="#">
              About
            </a>

            {/*Project Tab */}
            <a className="nav-link" href="#">
              Projects
            </a>

            {/*Resume Tab */}
            <a className="nav-link" href="#">
              Resume
            </a>

            {/*Contact Tab */}
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
