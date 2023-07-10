import { Link, Navigate, Route, Routes } from "react-router-dom";
import "../App.css";

import Agenda from "./Agenda";
import Reserver from "./reservationRDV/Reserver";
import Programmer from "./creeRdv/Programmer";
import Logout from "./authentication/Logout";
import Login from "./authentication/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import ModifierUser from "./parametres/ModifierUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ParametrerAdmin from "./parametres/ParametrerAdmin";
import ParametrerUser from "./parametres/ParametrerUser";
import Register from "./authentication/Register";
import AjouterRole from "./parametres/modificationAdmin/AjouterRole";
import SupprimerRole from "./parametres/modificationAdmin/SupprimerRole";
import SupprimerUtilisateur from "./parametres/modificationAdmin/SupprimerUtilisateur";
import NotExist from "./authentication/NotExist";
import Inscrit from "./authentication/Inscrit";
import BadAuthentication from "./authentication/BadAuthentication";
import NotAuthorized from "./authentication/NotAuthorized";
import InfoModifier from "./parametres/InfoModifier";
import { useSelector } from "react-redux";
import { useIsLoggedIn, useParametrerUser } from "../service/service";
import Home from "./Home";

function Header() {
  const isLoginService = useIsLoggedIn();
  const isLoginAppel = useSelector((state) => state.appelService.isLoginAppel);
  const isLogin = useSelector((state) => state.user.isLogin);
  const infoUser = useParametrerUser();
  if (!isLoginAppel && isLogin) {
    isLoginService()
      .then((data) => {});
    infoUser()
    .then((data) => {

    });
  }
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const isPro = useSelector((state) => state.user.isPro);
  const connectedUser = useSelector((state) => {
    return state.user.connectedUser;
});

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
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/reserverRdv" element={<Reserver />}></Route>
          <Route path="/programmerRdv" element={<Programmer />}></Route>
          <Route path="/parametresUser" element={<ParametrerUser />}></Route>
          <Route path="/parametresAdmin" element={<ParametrerAdmin />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/modifierUser" element={<ModifierUser />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin/ajouterRole" element={<AjouterRole />}></Route>
          <Route
            path="/admin/supprimerRole"
            element={<SupprimerRole />}
          ></Route>
          <Route
            path="/admin/supprimerUtilisateur"
            element={<SupprimerUtilisateur />}
          ></Route>
          <Route path="/inscrit" element={<Inscrit />}></Route>
          <Route
            path="/badAuthentication"
            element={<BadAuthentication />}
          ></Route>
          <Route path="/notAuthorized" element={<NotAuthorized />}></Route>
          <Route path="*" element={<NotExist />}></Route>
          <Route path="/modifieNotif" element={<ModifierUser />}></Route>
          <Route path="/infoModifier" element={<InfoModifier />}></Route>
        </Routes>
        <h6>By High-Computing</h6>
        <p>32 rue Chaillon, Villeneuve la Garenne</p>
      </div>
    </>
  );
}

export default Header;
