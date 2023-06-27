import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Agenda() {
  const [data, setData] = useState({
    utilisateur: '',
  });
  const navigate = useNavigate();
  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3>Agenda de rendez-vous</h3>
          <h6>Rechercher un rendez-vous</h6>
          <h6 className="d-flex align-items-center">
            <input
              value={data.utilisateur}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
              style={{ maxWidth: '350px' }}
            ></input>
            <button onClick={() => navigate(`/modifierUser`)} className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </h6>
          <h6>Liste des rendez-vous réservés</h6>
          <table>
            <thead>
              <td>
                <h6>nom</h6>
              </td>
              <td>
                <h6>Date</h6>
              </td>
              <td>
                <h6>nom</h6>
              </td>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Agenda