import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllRdvService } from '../service/serviceRdv';
import { deleteRdv, getAllRdv } from '../redux/slices/rdv';
import { useDispatch, useSelector } from 'react-redux';

function Agenda() {
  const [data, setData] = useState({
    utilisateur: '',
  });
  const rdvSlice = useSelector((state) => state.rdvSlice);
  const isLoggedIn = useSelector((state) => state.userSlice.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const token = localStorage["agendaToken"]; 
  //const isLoading = useSelector((state) => state.userSlice.isLoading);


  /*useEffect(() => {
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
  }, [navigate, token]);*/

 //&& !isLoading
 
  if (isLoggedIn && (new Date().getTime()-rdvSlice.lastFetch)>3000) {
    dispatch(getAllRdv()).then((data)=> {
      if (data.pageReturn === "error") {
        navigate(`/home`);
      }
    })
  }


  const handleDeleteRdv = (rdv) => {
    dispatch(deleteRdv(rdv.nameRdv)).then((data) => {
      dispatch(getAllRdv()).then((data)=> {
      }) 
    })
  }

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
              {rdvSlice.rdvList.map((rdv) => (
                <tr key={rdv.rdvId}>
                  <td>{rdv.nameRdv}</td>
                  <td>{rdv.client}</td>
                  <td>{rdv.professionnel}</td>
                  <td>{rdv.dateDuRendezVous}</td>
                  <td>{rdv.dureeRendezVous}</td>
                  <td>{rdv.description}</td>
                  <td>
                    <button onClick={() => handleDeleteRdv(rdv)}
                    className="btn btn-outline-succes">
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                  </td>
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