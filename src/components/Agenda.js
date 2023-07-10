import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllRdvService } from '../service/serviceRdv';

function Agenda() {
  const [data, setData] = useState({
    utilisateur: '',
  });
  const [rdvList, setRdvList] = useState([]);
  const navigate = useNavigate();

  const token = localStorage["agendaToken"]; 

  /*const token = useSelector((state) => {
    var tmpToken = state.user.token;
    return tmpToken;
  }
  );*/

  useEffect(() => {
    const fetchData = async () => {
      if (token !== "notlogin") {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const response = await getAllRdvService(headers);
          if (response.pageReturn === "error") {
            navigate(`/home`);
          } else {
            setRdvList(response);
          }
        } catch (error) {
          console.error(error);
          navigate(`/home`);
        }
      } else {
        navigate(`/login`);
      }
    };

    fetchData();
  }, [navigate, token]);





  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3>Agenda de rendez-vous</h3>
          <h6>Rechercher l'un de vos rendez-vous (entrez un nom de rendezVous)</h6>
          <div className="d-flex align-items-center">
            <input
              value={data.utilisateur}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
              style={{ maxWidth: '350px' }}
            ></input>
            <button onClick={() => navigate(`/modifierUser`)} className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </div>
          <h6>Liste des rendez-vous réservés</h6>
          <div className="card">
        <div className="card-body">
          <table style={{ borderSpacing: '10px', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th>
                  <h6>Nom</h6>
                </th>
                <th>
                  <h6>Client</h6>
                </th>
                <th>
                  <h6>Professionnel</h6>
                </th>
                <th>
                  <h6>Date</h6>
                </th>
                <th>
                  <h6>Durée</h6>
                </th>
                <th>
                  <h6>Description</h6>
                </th>
             </tr>
            </thead>
            <tbody>
              {rdvList.map((rdv) => (
                <tr key={rdv.rdvId}>
                  <td>{rdv.nameRdv}</td>
                  <td>{rdv.client}</td>
                  <td>{rdv.professionnel}</td>
                  <td>{rdv.dateDuRendezVous}</td>
                  <td>{rdv.dureeRendezVous}</td>
                  <td>{rdv.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda