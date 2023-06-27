import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [data, setData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        phoneNumber: '',
        address: '',
        city: '',
        rolePrincipale: '',
    });
    const navigate = useNavigate();
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Créez votre compte DocPuting en entrant les informations :</h3>
                <h6>
                    <table className="table table-light">
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td><input
                                    value={data.email}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Mot de Passe</td>
                                <td><input
                                    type="password"
                                    value={data.password}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Confirmer Mot de Passe</td>
                                <td><input
                                    type="password"
                                    value={data.confirmPassword}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                                ></input></td>
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

                    <h6 className="text-center">
                        <button
                            onClick={() => navigate(`/inscrit`)}
                            className="btn btn-outline-secondary">
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> S'inscrire
                        </button></h6></h6>
            </div>
        </div>
    )
}

export default Register