import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParametrerUser } from '../../service/service';

function ModifierUser() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const token = localStorage["agendaToken"];
    const users = useSelector((state) => state.user.user);
    const parametrerUserService = useParametrerUser();


    if (!!token || !!users.email) {

        parametrerUserService()
            .then((response) => {
                setData(response);
            })
    }
    else {
        navigate(`/login`);
    }

    const handleModif = () => {
        navigate(`/infoModifier`);
    }


    return (
        <div className="card">
            <div className="card-body">

                {data ? (
                    <div>
                        <h3 className="text-center">Modifier les Informations Utilisateur de {users.email} </h3>
                        <table className="table table-light">
                            <tbody>
                                <tr>
                                    <td>email</td>
                                    <td>{users.email}</td>
                                </tr>
                                <tr>
                                    <td>Prénom</td>
                                    <td><input
                                        value={users.firstname}
                                        className="form-control"
                                        onChange={(e) => setData({ ...users, firstname: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Nom</td>
                                    <td><input
                                        value={users.lastname}
                                        className="form-control"
                                        onChange={(e) => setData({ ...users, lastname: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Date de naissance</td>
                                    <td><input
                                        value={users.dateOfBirth}
                                        className="form-control"
                                        onChange={(e) => setData({ ...users, dateOfBirth: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Numéro de téléphone</td>
                                    <td><input
                                        value={users.phoneNumber}
                                        className="form-control"
                                        onChange={(e) => setData({ ...users, phoneNumber: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Adresse</td>
                                    <td><input
                                        value={users.adress}
                                        className="form-control"
                                        onChange={(e) => setData({ ...users, adress: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Ville</td>
                                    <td><input
                                        value={users.city}
                                        className="form-control"
                                        onChange={(e) => setData({ ...users, city: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Rôle principal</td>
                                    <td><input
                                        value={users.rolePrincipale}
                                        className="form-control"
                                        onChange={(e) => setData({ ...users, rolePrincipale: e.target.value })}
                                    ></input></td>
                                </tr>
                            </tbody>
                        </table>

                        <div><h6> Modifier Les informations utilisateur </h6>
                            <button
                                onClick={handleModif}
                                className="btn btn-outline-secondary">
                                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                ) : (<p>Chargement des données ...</p>)}
            </div>
        </div>
    )
}

export default ModifierUser