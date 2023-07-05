import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ajouterRoleService } from '../../../service/service';

function AjouterRole() {
  const [data, setData] = useState({
    utilisateur: '',
    role: '',
  });
  const navigate = useNavigate();

  const token = useSelector((state) => {
    var tmpToken = state.user.token;
    return tmpToken;
  }
  );

  if (token === "notlogin") {
    navigate(`/login`);
  };

  const handleAddRole = () => {
    if (token !== "notlogin") {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const dto = { 
        role : `${data.role}`,
        userParam : `${data.utilisateur}`
      }

      ajouterRoleService(headers, dto)
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
          <h3 className="text-center"> Ajouter un role à un Utilisateur :</h3>
          <h6 className="text-center"> Veuilliez choisir le role ainsi que l'utilisateur de votre choix.</h6>
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
                <tr>
                  <td>Role</td>
                  < td><input
                    type="password"
                    value={data.role}
                    className="form-control"
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                  ></input></td>
                </tr>
              </tbody>
            </table>
            <h6 className="text-center">
              <button onClick={handleAddRole} className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> Soumettre
              </button>
            </h6>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default AjouterRole