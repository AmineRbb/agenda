import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserInfo, modifUserInfo } from '../../redux/slices/user';

function ModifierUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userSlice);
    const [data, setData] = useState(users.connectedUser);
    const roles = useSelector((state) => state.userSlice.roles);

    useEffect(() => {
        const datePrint = new Date(users.connectedUser.dateOfBirth);
        const day = datePrint.getDate();
        const month = datePrint.getMonth() + 1;
        const year = datePrint.getFullYear();
        const datePrintable = `${day}/${month}/${year}`;
        setData(prevState => ({ ...prevState, dateOfBirth: datePrintable }));
    }, [users.connectedUser]);

    const handleModif = async () => {
        try {
            const [day, month, year] = data.dateOfBirth.split("/");
            const realDateOfBirth = new Date(year, month - 1, day);
            const updatedData = { ...data, dateOfBirth: realDateOfBirth };

            await dispatch(modifUserInfo(updatedData)).unwrap();
            await dispatch(getUserInfo()).unwrap();
            navigate(`/infoModifier`);
        } catch (error) {
            console.error(error);
            navigate(`/errorCode`);
        }
    }

  const changementNomRole = (role) => {
    let infoFinal = "";
    if (role === "ADMIN") {
      infoFinal = "Administrateur";
    }
    else if (role === "PRO") {
      infoFinal = "Professionnel";
    }
    else if (role === "USER") {
      infoFinal = "Client";
    }
    else {
      console.error("type utilisateur inconnu");
    }

    return infoFinal;
  };

    return (
        <div className="card">
            <div className="card-body">
                {data ? (
                    <div>
                        <h3 className="text-center">Modifier les informations utilisateur de {data.email} </h3>
                        <table className="table table-light">
                            <tbody>
                                <tr>
                                    <td>Email</td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <td>Rôle(s)</td>
                                    <td>
                                    {roles.map((rol) => (
                                        <p key={rol.id}>
                                            <p>{changementNomRole(rol.name)}</p>
                                        </p>
                                    ))}
                                    </td>
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
                            </tbody>
                        </table>

                        <div  style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <button
                                onClick={handleModif}
                                className="btn btn-outline-secondary">
                                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Modifier
                            </button>
                        </div>
                    </div>
                ) : (<p>Chargement des données ...</p>)}
            </div>
        </div>
    )
}

export default ModifierUser