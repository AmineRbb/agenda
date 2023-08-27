import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteRdv, getAllRdv } from '../redux/slices/rdv';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';


function Agenda() {
  const rdvSlice = useSelector((state) => state.rdvSlice);
  const users = useSelector((state) => state.userSlice.connectedUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteRdv = async (rdv) => {
    try {
      await dispatch(deleteRdv(rdv.nameRdv));
      await dispatch(getAllRdv());
      navigate(`/agenda`);
    } catch (error) {
      console.error(error);
    }
  };

  let filteredRdvList = rdvSlice.rdvList.filter((rdv) => rdv.client === users.email);

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3>Agenda de rendez-vous</h3>

          <h6>Liste des rendez-vous réservés</h6>
          <div className="card">
            <div className="card-body">
              <table className="table table-light" style={{ borderSpacing: '10px', tableLayout: 'fixed' }}>
                <thead>
                  <tr>
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
                      <h6>Durée (minutes)</h6>
                    </th>
                    <th>
                      <h6>Type de Rendez-Vous</h6>
                    </th>
                    <th>
                      <h6>Annuler le Rendez-Vous</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRdvList.map((rdv) => (
                    <tr key={rdv.rdvId}>
                      <td>{rdv.client}</td>
                      <td>{rdv.professionnel}</td>
                      <td>{format(new Date(rdv.dateDuRendezVous), "EEEE dd/MM/yyyy HH:mm")}</td>
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