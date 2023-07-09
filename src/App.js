import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Agenda from "./components/Agenda";
import Reserver from "./components/reservationRDV/Reserver";
import Programmer from "./components/creeRdv/Programmer";
import Logout from "./components/authentication/Logout";
import Login from "./components/authentication/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customtitleAm.css";
import ModifierUser from "./components/parametres/ModifierUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ParametrerAdmin from "./components/parametres/ParametrerAdmin";
import ParametrerUser from "./components/parametres/ParametrerUser";
import Register from "./components/authentication/Register";
import AjouterRole from "./components/parametres/modificationAdmin/AjouterRole";
import SupprimerRole from "./components/parametres/modificationAdmin/SupprimerRole";
import SupprimerUtilisateur from "./components/parametres/modificationAdmin/SupprimerUtilisateur";
import NotExist from "./components/authentication/NotExist";
import Inscrit from "./components/authentication/Inscrit";
import BadAuthentication from "./components/authentication/BadAuthentication";
import NotAuthorized from "./components/authentication/NotAuthorized";
import InfoModifier from "./components/parametres/InfoModifier";
import { useSelector } from "react-redux";
import { useIsLogin, useParametrerUser } from "./service/service";
import { useEffect, useState } from "react";

function AppContent() {
  const isLoginService = useIsLogin();
  const isLoginAppel = useSelector((state) => state.appelService.isLoginAppel);
  const isLogin = useSelector((state) => state.user.isLogin);
  const infoUser = useParametrerUser();
  if (!isLoginAppel && isLogin) {
    isLoginService()
      .then((data) => {

      });
    infoUser()
    .then((data) => {

    });
  }
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const isPro = useSelector((state) => state.user.isPro);
  const users = useSelector((state) => state.user.user);
  const token = localStorage["agendaToken"];

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
              <h6>Bonjour {users.firstName}</h6>
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
                className="customamtitle btn btn-outline-info ms-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={agendaLink}
                className="customamtitle btn btn-outline-info ms-1"
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                to="/reserverRdv"
                className="customamtitle btn btn-outline-info ms-1"
              >
                Reserver
              </Link>
            </li>
            {isPro && (
              <li>
                <Link
                  to={programmerLink}
                  className="customamtitle btn btn-outline-info ms-1"
                >
                  Programmer
                </Link>
              </li>
            )}
            {isLogin && (
              <li>
                <Link
                  to={profileLink}
                  className="customamtitle btn btn-outline-info ms-1"
                >
                  Profile
                </Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link
                  to={adminLink}
                  className="customamtitle btn btn-outline-info ms-1"
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


function App() {

  const [refresh, setRefresh] = useState(false);
  const isLogin = useSelector((state) => state.isLogin);
  const isAdmin = useSelector((state) => state.isAdmin);

  // Effectue une action lorsque les valeurs de isLogin et isAdmin changent
  useEffect(() => {
    // Déclenche un rafraîchissement du rendu
    setRefresh(!refresh);
  }, [isLogin, isAdmin]);


  return (
    <BrowserRouter>
      <div>
        <AppContent key={refresh} isLogin={isLogin} isAdmin={isAdmin} />
      </div>
    </BrowserRouter>
  );
}
/// {withAuthorization(['admin'])(ParametrerAdmin)} />
export default App;
