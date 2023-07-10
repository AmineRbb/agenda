import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useIsLoggedIn, useParametrerUser } from "../service/service";

function Header() {
 // const isLoginService = useIsLoggedIn();
  //const isLoginAppel = useSelector((state) => state.appelService.isLoginAppel);
  const isLogin = useSelector((state) => state.userSlice.isLoggedIn);
  const connectedUser = useSelector((state) => {
    return state.userSlice.connectedUser;
  });


  const isAdmin = useSelector((state) => state.userSlice.isAdmin);
  const isPro = useSelector((state) => state.userSlice.isPro);

  let adminLink = "/login";
  let profileLink = "/login";
  let programmerLink = "/login";
  let agendaLink = "/login";



  if (isLogin) {

    agendaLink = "/agenda";
    profileLink = "/parametresUser";

    if (isPro) {
      programmerLink = "/programmerRdv";
    }
    else {
      programmerLink = "/notAuthorized";
    }

    if (isAdmin) {
      adminLink = "/parametresAdmin";
    } else {
      adminLink = "/notAuthorized";
    }
  }

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-between align-items-center">
          <span className="me-auto">DocPuting</span>
          {isLogin ? (
            <div>
              <h6>Bonjour {connectedUser.firstName}</h6>
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
                  to={programmerLink}
                  className="custom-title btn btn-outline-info ms-1"
                >
                  Programmer
                </Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link
                  to={profileLink}
                  className="custom-title btn btn-outline-info ms-1"
                >
                  Profile
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link
                  to={adminLink}
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