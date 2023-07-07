import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Programmer() {

  const user = useSelector((state) => state.user);
  const nameee = JSON.stringify(user);
  console.log(user.token);
  console.log(user);
  console.log(nameee);
  const nameu = JSON.parse(nameee);
  console.log(nameu);

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

  return (
    <div>
      <div className="p-1 m-1">
        <div className="card">
          <div className="card-body">
            <h6>Programmer une plage de rendez-vous disponible pour vos clients</h6>
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
                            onClick={handleSignup}
                            className="btn btn-outline-secondary">
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> S'inscrire
                        </button></h6></h6>
          
          </div>
        </div>
      </div>
      <div>Programmer
        <h6>alors donc {nameu.token} </h6>
        <h6>le user est {user.token}</h6>
      </div>
    </div>
  );
}

export default Programmer