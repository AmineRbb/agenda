import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Reserver() {
  const [data, setData] = useState({
    utilisateur: '',
  });
  const navigate = useNavigate();
  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h5>Cherchez un rendez-vous en fonction de ce que vous rechercher</h5>
          <div className="d-flex align-items-center">
            <h6>Chercher un domaine de profession</h6>
            <input
              value={data.utilisateur}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
              style={{ maxWidth: '350px' }}
            ></input>
          </div>
          <div className="d-flex align-items-center">
            <h6>Chercher un professionnel </h6>
            <input
              value={data.utilisateur}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
              style={{ maxWidth: '350px' }}
            ></input>
          </div>
          <div>
            <h6>Rechercher :
              <button onClick={() => navigate(`/modifierUser`)} className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button> </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserver