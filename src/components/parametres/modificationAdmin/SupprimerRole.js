import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { supprimerRoleService } from '../../../service/service';
import { useSelector } from 'react-redux';

function SupprimerRole() {
  const [data, setData] = useState({
    utilisateur:'',
    role:'',
  });
  const navigate = useNavigate();
 
  const token = useSelector((state) => {
    var tmpToken = state.user.token;
    return tmpToken;
  }
  );
  /*if (token === "notlogin") {
    navigate(`/login`);
  };*/


  const handleDeleteRole = () => {
    if (token !== "notlogin") {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const dto = { 
        role : `${data.role}`,
        userParam : `${data.utilisateur}`
      }

      supprimerRoleService(headers, dto)
        .then((response) => {
          if(response.booleanPage===true){
            navigate(`/home`);
            }
            else{
              navigate(`/modifieNotif`);
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
          <h3 className="text-center"> Supprimer un role à un Utilisateur :</h3>
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
                    value={data.role}
                    className="form-control"
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                  ></input></td>
                </tr>
              </tbody>
            </table>
            <h6 className="text-center">
               <button onClick={handleDeleteRole} className="btn btn-outline-secondary">
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> Soumettre
          </button>
          </h6>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default SupprimerRole