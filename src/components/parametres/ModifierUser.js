import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ModifierUser() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Récupérer le JWT de l'utilisateur connecté depuis le stockage local (localStorage)
        const token =
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODc1MzMyNjUsImV4cCI6MTY4NzUzNDcwNX0.du9gOplcDlMOCZeCUbC3wOGAAHRNSoEy-NyQuZXL_oY';

        // Vérifier si un JWT est présent
        if (token) {
            // Ajouter le JWT à l'en-tête Authorization
            const headers = {
                Authorization: `Bearer ${token}`,
            };


            //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            //axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';


            axios
                .get('http://localhost:8083/api/v1/main/modifInfo', { headers })
                .then(response => {
                    // Récupérer les données renvoyées par le backend
                    setData(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                
                {data ? (
                    <h6>
                        <h3 className="text-center">Mofifier les Informations Utilisateur de {data.email} </h3>
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

                        <h6> Modifier Les informations utilisateur <button className="btn btn-outline-secondary">
                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        </button></h6></h6>
                ) : (<p>Chargement des données ...</p>)}
            </div>
        </div>
    )
}

export default ModifierUser