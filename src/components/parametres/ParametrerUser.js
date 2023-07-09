import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useParametrerUser } from '../../service/service';
import { useSelector } from 'react-redux';


function ParametrerUser() {
  const navigate = useNavigate();
  const token = localStorage["agendaToken"];
  const users = useSelector((state) => state.user.user);
  const parametrerUserService = useParametrerUser();

  useEffect(() => {
    if (!!token || !!users.email) {
      
      parametrerUserService()
        .then((response) => {
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      navigate(`/login`);
    }
  }, [navigate, token]);

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Informations Utilisateur</h3>
          {users ? (
            <div>
              <table className="table table-light">
                <tbody>
                  <tr>
                    <td>email</td>
                    <td>{users.email}</td>
                  </tr>
                  <tr>
                    <td>Prénom</td>
                    <td>{users.firstname}</td>
                  </tr>
                  <tr>
                    <td>Nom</td>
                    <td>{users.lastname}</td>
                  </tr>
                  <tr>
                    <td>Date de naissance</td>
                    <td>{users.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <td>Numéro de téléphone</td>
                    <td>{users.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>Adresse</td>
                    <td>{users.adress}</td>
                  </tr>
                  <tr>
                    <td>Ville</td>
                    <td>{users.city}</td>
                  </tr>
                  <tr>
                    <td>Rôle principal</td>
                    <td>{users.rolePrincipale}</td>
                  </tr>
                </tbody>
              </table>

              <h6> Modifier{' '} <button onClick={() => navigate(`/modifierUser`)} className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </button></h6></div>
          ) : (<p>Chargement des données ...</p>)}
        </div>
      </div>
    </div>
  );
}

export default ParametrerUser;
