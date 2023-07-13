import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { voirCalendrierPro } from '../../redux/slices/rdv';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

function ReserverSearchPro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user =  useSelector((state) => state.userSlice);
  const isLoggedIn = useSelector((state) => state.userSlice.isLoggedIn);
  const rdvSlice = useSelector((state) => state.rdvSlice);


  const [data, setData] = useState({
    description: '',
    typeRdv: '',
    jourDebut: '',
    jourFin: '',
    heureDebut:'',
    heureFin:'',
    minuteDebut: '',
    minuteFin: '',
    dureeRdv: '',
    jourDisponible: '',
});

const profession = {
    professionnel:'adm'
}

if (isLoggedIn && (new Date().getTime()-rdvSlice.lastFetch)>3000) {
        dispatch(voirCalendrierPro(profession)).then((data) => {
            if (data.pageReturn === "error") {
                navigate(`/home`);
              }
        })
    }

    const handleSeeProgramCalendar = () => {
        navigate(`/home`);
    }

    const handleDeleteCalendar = (cal) => {
        dispatch(handleDeleteCalendar(cal)).then(() => {
            dispatch(voirCalendrierPro()).then(()=> {
            }) 
          })
    }

    return (
        <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3>Liste des Rendez-Vous Disponibles :</h3>
          <div className="card">
        <div className="card-body">
          <table style={{ borderSpacing: '10px', tableLayout: 'fixed' }}>
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
                  <h6>Description</h6>
                </th>
             </tr>
            </thead>
            <tbody>
              {rdvSlice.calendarList.map((cal) => (
                <tr key={cal.rdvId}>
                  <td>{cal.profession}</td>
                  <td>{cal.dureeRendezVous}</td>
                  <td>{cal.description}</td>
                  <td>
                    <button onClick={() => handleDeleteCalendar(cal)}
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
    )
}

export default ReserverSearchPro


/* <th>
                  <h6>Jour Début</h6>
                </th>
                <th>
                  <h6>Jour Fin</h6>
                </th>
                <th>
                  <h6>Heure Début</h6>
                </th>
                <th>
                  <h6>Heure Fin</h6>
                </th>
                <th>
                  <h6>Minute Début</h6>
                </th>
                <th>
                  <h6>Minute Fin</h6>
                </th>
                                <th>
                  <h6>Jours Disponibles</h6>
                </th>
                */