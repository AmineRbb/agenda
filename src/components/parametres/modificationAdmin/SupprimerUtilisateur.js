import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { supprimerUtilisateurService } from '../../../service/service';

function SupprimerUtilisateur() {
  const [data, setData] = useState({
    utilisateur:'',
  });
  const navigate= useNavigate();
  const token = useSelector((state) => {
    var tmpToken = state.user.token;
    return tmpToken;
  }
  );
  if (token === "notlogin") {
    navigate(`/login`);
  };


  const handleDeleteUser = () => {
    if (token !== "notlogin") {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const dto = { 
        userParam : `${data.utilisateur}`
      }

      supprimerUtilisateurService(headers, dto)
        .then((response) => {
          if(response.booleanPage===true){
            navigate(`/home`);
            }
            else{
              navigate(`/notAuthorized`);
            }

        })
    }
    else {
      navigate(`/notAuthorized`);
    }
  };
  
  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center"> Supprimer un Utilisateur :</h3>
          <h6 className="text-center"> Veuilliez choisir l'utilisateur de votre choix.</h6>
          <h6>
            <table className="table table-light">
              <tbody>
                <tr>
                  <td>Utilisateur</td>
                  <td><input
                    value={data.utilisateur}
                    className="form-control"
                    onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
                  ></input></td>
                </tr>
              </tbody>
            </table>
            <h6 className="text-center">
               <button onClick={handleDeleteUser} className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> Soumettre
          </button>
          </h6>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default SupprimerUtilisateur