import React from 'react'
import moment from 'moment'; 
import 'moment/locale/fr'; // Si vous souhaitez spécifier le français comme langue

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { voirCalendrierPro } from '../../redux/slices/rdv';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListCalendarProgrammer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rdvSlice = useSelector((state) => state.rdvSlice);

  const generateRdv = () => {
    const rdvAfficher = [];
    rdvSlice.calendarList.forEach((cal) => {
      const horaireDebutvar = moment(cal.horaireDebut).format('HH:mm:ss'); 
      const horaireFinvar = moment(cal.horaireFin).format('HH:mm:ss'); 
      const dateDebutvar = moment(cal.horaireDebut).format('YYYY-MM-DD'); 
      const dateFinvar = moment(cal.horaireFin).format('YYYY-MM-DD');
      let rdvRajouterAList = {
        rdvId: cal.rdvId,
        profession: cal.userDto.professionnel,
        dureeRendezVous: cal.dureeRdv,
        horaireDebut: horaireDebutvar,
        horaireFin: horaireFinvar,
        dateDebut: dateDebutvar,
        dateFin: dateFinvar
      }

      rdvAfficher.push(rdvRajouterAList);
    });
    return rdvAfficher;
  };

  const rdvAfficher=generateRdv();

  const handleDeleteCalendar = async (cal) => {
    try {
      await dispatch(handleDeleteCalendar(cal)).unwrap();
      await dispatch(voirCalendrierPro()).unwrap();
    } catch (error) {
      console.error(error);
      navigate(`/notAuthorized`);
    }
  }

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3>Liste de vos disponibilités</h3>
          <div className="card">
            <div className="card-body">
              <table className="table table-light" style={{ borderSpacing: '10px', tableLayout: 'fixed' }}>
                <thead>
                  <tr>
                    <th>
                      <h6>Id</h6>
                    </th>
                    <th>
                      <h6>Type de Rendez-Vous</h6>
                    </th>
                    <th>
                      <h6>Duree par Rendez-Vous</h6>
                    </th>
                    <th>
                      <h6>Heure Début d'une Journée</h6>
                    </th>
                    <th>
                      <h6>Heure Fin d'une Journée</h6>
                    </th>
                    <th>
                      <h6>Date Début</h6>
                    </th>
                    <th>
                      <h6>Date Fin</h6>
                    </th>
                    <th>
                      <h6>Supprimer</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rdvAfficher.map((cal) => (
                    <tr key={cal.rdvId}>
                      <td>{cal.rdvId}</td>
                      <td>{cal.profession}</td>
                      <td>{cal.dureeRendezVous}</td>
                      <td>{cal.horaireDebut}</td>
                      <td>{cal.horaireFin}</td>
                      <td>{cal.dateDebut}</td>
                      <td>{cal.dateFin}</td>
                      <td>
                        <button onClick={() => handleDeleteCalendar(cal)}
                          className="btn btn-outline-secondary">
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
  )
}

export default ListCalendarProgrammer