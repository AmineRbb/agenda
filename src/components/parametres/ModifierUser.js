import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { parametrerUserService } from '../../service/service';

function ModifierUser() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    
    const token = localStorage["agendaToken"]; 
    
    /*const token = useSelector((state) => {
        var tmpToken = state.user.token;
        return tmpToken;
    }
    );*/

    if (token !== "notlogin") {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        //axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
        parametrerUserService(headers)
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
                        <h3 className="text-center">Modifier les Informations Utilisateur de {data.email} </h3>
                        <table className="table table-light">
                            <tbody>
                                <tr>
                                    <td>email</td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <td>Prénom</td>
                                    <td><input
                                        value={data.firstname}
                                        className="form-control"
                                        onChange={(e) => setData({ ...data, firstname: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Nom</td>
                                    <td><input
                                        value={data.lastname}
                                        className="form-control"
                                        onChange={(e) => setData({ ...data, lastname: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Date de naissance</td>
                                    <td><input
                                        value={data.dateOfBirth}
                                        className="form-control"
                                        onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Numéro de téléphone</td>
                                    <td><input
                                        value={data.phoneNumber}
                                        className="form-control"
                                        onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Adresse</td>
                                    <td><input
                                        value={data.adress}
                                        className="form-control"
                                        onChange={(e) => setData({ ...data, adress: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Ville</td>
                                    <td><input
                                        value={data.city}
                                        className="form-control"
                                        onChange={(e) => setData({ ...data, city: e.target.value })}
                                    ></input></td>
                                </tr>
                                <tr>
                                    <td>Rôle principal</td>
                                    <td><input
                                        value={data.rolePrincipale}
                                        className="form-control"
                                        onChange={(e) => setData({ ...data, rolePrincipale: e.target.value })}
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