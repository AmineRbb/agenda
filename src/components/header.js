import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Header() {
  const isLogin = useSelector((state) => state.userSlice.isLoggedIn);
  const connectedUser = useSelector((state) => {
    return state.userSlice.connectedUser;
  });
  const isAdmin = useSelector((state) => state.userSlice.isAdmin);
  const isPro = useSelector((state) => state.userSlice.isPro);

  let agendaLink = "/login";

  if (isLogin) {
    agendaLink = "/agenda";
  }

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-between align-items-center">
          <span className="me-auto">Meetings</span>
          {isLogin ? (
            <div>
              <h6>Bonjour {connectedUser.firstname}</h6>
              <Link
                to="/logout"
                className="btn btn-outline-info ms-1"
                style={{ marginRight: "10px", marginTop: "5px" }}
              >
                <FontAwesomeIcon icon={faUser} className="me-1" /> Se déconnecter
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline-info ms-1"
              style={{ marginRight: "10px", marginTop: "5px" }}
            >
              <FontAwesomeIcon icon={faUser} className="me-1" /> Se connecter
            </Link>
          )}
        </h1>
        <nav className="m-1 p-1 border border-info navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav na-pills">
            <li>
              <Link
                to="/home"
                className="custom-title btn btn-outline-info ms-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={agendaLink}
                className="custom-title btn btn-outline-info ms-1"
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                to="/reserverRdv"
                className="custom-title btn btn-outline-info ms-1"
              >
                Reserver
              </Link>
            </li>
            {isPro && (
              <li>
                <Link
                  to="/programmerRdv"
                  className="custom-title btn btn-outline-info ms-1"
                >
                  Programmer
                </Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link
                  to="/parametresUser"
                  className="custom-title btn btn-outline-info ms-1"
                >
                  Profile
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link
                  to="/parametresAdmin"
                  className="custom-title btn btn-outline-info ms-1"
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;