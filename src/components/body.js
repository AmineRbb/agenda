import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Agenda from "./Agenda";
import Reserver from "./reservationRDV/Reserver";
import Programmer from "./creeRdv/Programmer";
import Logout from "./authentication/Logout";
import Login from "./authentication/Login";
import ModifierUser from "./parametres/ModifierUser";
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


function Body() {
    return (
        <div>
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
        </div>
    )
}

export default Body