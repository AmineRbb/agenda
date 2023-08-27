import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../../redux/slices/user';
import { useDispatch } from 'react-redux';

function SupprimerUtilisateur() {
  const [data, setData] = useState({
    utilisateur:'',
  });
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const handleDeleteUser = async () => {
    try {
      const dto = {
        userParam: `${data.utilisateur}`
      }
      await dispatch(deleteUser(dto)).unwrap();
      navigate(`/infoModifier`);
    }
    catch (error) {
      console.error(error);
      navigate(`/notAuthorized`);
    }
  }

  
  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center"> Supprimer un Utilisateur :</h3>
          <h6 className="text-center"> Choisissez un utilisateur.</h6>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupprimerUtilisateur