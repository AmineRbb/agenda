import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';


function Home() {
  //const user = useSelector((state) => state.user.user); <h6>Bienvenue, {user.name}</h6>
  const [data, setData] = useState({
    utilisateur: '',
  });
  const navigate = useNavigate();
  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">


          <h3>Bienvenue sur DocPuting</h3>
          <h6>Trouver un rendez-vous avec un professionnel.</h6>
          <br />
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
          <br />
          <h6>De nombreux spécialistes sont à votre service.</h6>
          <h6>
          <img src="businessman.png" alt="Mon Image" style={{ width: '300px', height: '250px' }} />
          <img src="coatchSport.jpg" alt="Mon Image" style={{ width: '300px', height: '250px' }} />
          <img src="medecinDessin.png" alt="Mon Image" style={{ width: '300px', height: '250px' }} />
          </h6>
          <br /><br /><br /><br />
          <h6>Êtes vous un professionnel dans un domaine?</h6>
          <h7>Vous pouvez utiliser DocPuting afin de gerer vos rendez-vous avec vos clients. Vous pouvez
            libérer du temps avec une gestion de vos rendez-vous beaucoup plus rapide et moderne.
            Vous pouvez améliorer l'accès à votre pratique professionnel quelle que soit le métier
            et ainsi gagner en confort de travail.
          </h7>
        </div>
      </div>
    </div>
  );
}

export default Home