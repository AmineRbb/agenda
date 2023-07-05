import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { parametrerUserService } from '../../service/service';
import { useSelector } from 'react-redux';


function ParametrerUser() {
  const [data, setData] = useState(null);
  const navigate= useNavigate();
  const token = useSelector((state) => {
    var tmpToken = state.user.token;
    return tmpToken;
    }
  );

  //useEffect(() => {
    // Récupérer le JWT de l'utilisateur connecté depuis le stockage local (localStorage)
    
      //'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2ODgzNzM4MDUsImV4cCI6MTY4ODM3NTI0NX0.7QsasHYugChCEGPrmzlQiKAyi0aubXRAmzjD3SKJwKE';

    // Vérifier si un JWT est présent
    if (token!=="notlogin") {
      // Ajouter le JWT à l'en-tête Authorization
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      
      //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
      parametrerUserService(headers)
      .then((response) => {
          setData(response);

      })

      /*axios
        .get('http://localhost:8083/api/v1/main/modifInfo', { headers })
        .then(response => {
          // Récupérer les données renvoyées par le backend
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });*/
    }
    else {
      navigate(`/login`);
    }
 // }, []);

  

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Informations Utilisateur</h3>
          {data ? (
            <h6>
            <table className="table table-light">
              <tbody>
                <tr>
                  <td>email</td>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <td>Prénom</td>
                  <td>{data.firstname}</td>
                </tr>
                <tr>
                  <td>Nom</td>
                  <td>{data.lastname}</td>
                </tr>
                <tr>
                  <td>Date de naissance</td>
                  <td>{data.dateOfBirth}</td>
                </tr>
                <tr>
                  <td>Numéro de téléphone</td>
                  <td>{data.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Adresse</td>
                  <td>{data.adress}</td>
                </tr>
                <tr>
                  <td>Ville</td>
                  <td>{data.city}</td>
                </tr>
                <tr>
                  <td>Rôle principal</td>
                  <td>{data.rolePrincipale}</td>
                </tr>
              </tbody>
            </table>

          <h6> Modifier{' '} <button onClick={() => navigate(`/modifierUser`)} className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </button></h6></h6>
          ) : (<p>Chargement des données ...</p>)}

          

        </div>
      </div>
    </div>
  );
}

export default ParametrerUser;
