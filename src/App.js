import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Reserver from './components/reservationRDV/Reserver';
import Programmer from './components/creeRdv/Programmer';
import Logout from './components/authentication/Logout';
import Login from './components/authentication/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import './customtitleAm.css';
import ModifierUser from './components/parametres/ModifierUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ParametrerAdmin from './components/parametres/ParametrerAdmin';
import ParametrerUser from './components/parametres/ParametrerUser';
import Register from './components/authentication/Register';
import AjouterRole from './components/parametres/modificationAdmin/AjouterRole';
import SupprimerRole from './components/parametres/modificationAdmin/SupprimerRole';
import SupprimerUtilisateur from './components/parametres/modificationAdmin/SupprimerUtilisateur';
import NotExist from './components/authentication/NotExist';
import Inscrit from './components/authentication/Inscrit';
import BadAuthentication from './components/authentication/BadAuthentication';
import NotAuthorized from './components/authentication/NotAuthorized';
//import { isLoginService } from './service/service';
//import withAuthorization from './service/withAuthorization';




function App() {
  let adminLink="/parametresAdmin";
 /* const result = isLoginService()
  const isLogin = result.isLogin;
  const isAdmin = result.isAdmin;
  if (isLogin === true) {
    if (isAdmin) {
       adminLink = "/parametresAdmin";
    }
    else {
       adminLink = "/notAuthorized";
    }
  }
  //else {
  //const adminLink = "/login";
  //}*/

  return (
    <BrowserRouter>
      <div>
        <h1 className="d-flex justify-content-between align-items-center">
          <span className="me-auto" >DocPuting</span>
          <Link to="/login" className=" btn btn-outline-info ms-1" style={{ marginRight: '10px', marginTop: '5px' }} >
            <FontAwesomeIcon icon={faUser} className="me-1" /> Se connecter
          </Link>
        </h1>
        <nav className="m-1 p-1 border border-info navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav na-pills">
            <li>
              <Link to="/home" className="customamtitle btn btn-outline-info ms-1">Home</Link>
            </li>
            <li>
              <Link to="/agenda" className="customamtitle btn btn-outline-info ms-1">Agenda</Link>
            </li>
            <li>
              <Link to="/reserverRdv" className="customamtitle btn btn-outline-info ms-1">Reserver</Link>
            </li>
            <li>
              <Link to="/programmerRdv" className="customamtitle btn btn-outline-info ms-1">Programmer</Link>
            </li>
            <li>
              <Link to="/parametresUser" className="customamtitle btn btn-outline-info ms-1">Profile</Link>
            </li>
            <li>
              <Link to={adminLink} className="customamtitle btn btn-outline-info ms-1">Admin</Link>
            </li>
            <li>
              <Link to="/logout" className="customamtitle btn btn-outline-info ms-1">Deconnection</Link>
            </li>
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
          <Route path="/admin/supprimerRole" element={<SupprimerRole />}></Route>
          <Route path="/admin/supprimerUtilisateur" element={<SupprimerUtilisateur />}></Route>
          <Route path="/inscrit" element={<Inscrit />}></Route>
          <Route path="/badAuthentication" element={<BadAuthentication />}></Route>
          <Route path="/notAuthorized" element={<NotAuthorized />}></Route>
          <Route path="*" element={<NotExist />}></Route>
          <Route path="/modifieNotif" element={<ModifieNotif />}></Route>
        </Routes>
        <h6>By High-Computing</h6>
        <p>32 rue Chaillon, Villeneuve la Garenne</p>
      </div>
    </BrowserRouter>
  );
}
 /// {withAuthorization(['admin'])(ParametrerAdmin)} />
export default App;
