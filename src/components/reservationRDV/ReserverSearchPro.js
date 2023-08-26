import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRdv, reserveRdv } from '../../redux/slices/rdv';

function ReserverSearchPro() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSlice = useSelector((state) => state.userSlice);
  const rdvSlice = useSelector((state) => state.rdvSlice);

  const handleAddRdv = async (appointment) => {
    try {
      const request = {
        appointment: appointment,
        mailUtilisateur: userSlice.connectedUser.email
      }
      await dispatch(reserveRdv(request)).unwrap();
      await dispatch(getAllRdv());
      navigate(`/rdvReserver`);
    } catch (error) {
      console.error(error);
      navigate(`/login`);
    }

  };

  const generateAppointmentss = () => {
    const appointments = [];

    rdvSlice.calendarList.forEach((cal) => {
      {
        const appointment = {
          id: cal.rdvId,
          professionnel: cal.professionnel,
          profession: cal.profession,
          dureeRdv: cal.dureeRendezVous,
          description: cal.description,
          appointmentTime: new Date(startTime)
        };
        let startTime = cal.horaireDebut;
        let endTime = cal.horaireFin;
        const jourDebut = new Date(appointment.appointmentTime).getDay(); // Récupérer le jour de la semaine (0 - Dimanche, 1 - Lundi, ...)
        if (!cal.jourDisponible[jourDebut]) {
          while (startTime <= endTime) {
            

            // Filtrer les rendez-vous déjà réservés
            const isAlreadyBooked = rdvSlice.rdvList.some((rdv) => {
              return (
                rdv.professionnel === appointment.professionnel &&
                rdv.dateDuRendezVous === appointment.appointmentTime.getTime()
              );
            });

            if (!isAlreadyBooked) {
              appointments.push(appointment);
            }

            const newTime = startTime + cal.dureeRendezVous * 60 * 1000;
            startTime = newTime; // Mettre à jour le temps avec la nouvelle valeur
          }
        }
      }
    });

    return appointments;
  };


  const generateAppointments = () => {
    const appointments = [];
    rdvSlice.calendarList.forEach((cal) => {
      let jourDebut = new Date(cal.horaireDebut);
      let jourFin = new Date(cal.horaireFin);

      const heureDebut = jourDebut.getHours();
      const minuteDebut = jourDebut.getMinutes();
      const heureFin = jourFin.getHours();
      const minuteFin = jourFin.getMinutes();

      while (jourDebut <= jourFin) {
        const jourDebutNumero = jourDebut.getDay();
        if (cal.jourDisponible[jourDebutNumero]) {
          let finJourDebut = new Date(jourDebut);
          finJourDebut.setHours(heureFin);
          finJourDebut.setMinutes(minuteFin);
          jourDebut.setHours(heureDebut);
          jourDebut.setMinutes(minuteDebut);

          while (jourDebut <= finJourDebut) {
            const appointment = {
              id: cal.rdvId,
              professionnel: cal.professionnel,
              profession: cal.profession,
              dureeRdv: cal.dureeRendezVous,
              description: cal.description,
              appointmentTime: new Date(jourDebut)
            };

            // Filtrer les rendez-vous déjà réservés
            const isAlreadyBooked = rdvSlice.rdvList.some((rdv) => {
              return (
                rdv.professionnel === appointment.professionnel &&
                rdv.dateDuRendezVous === appointment.appointmentTime.getTime()
              );
            });

            if (!isAlreadyBooked) {
              appointments.push(appointment);
            }

            const miseAjour = jourDebut.getTime() + cal.dureeRendezVous * 60 * 1000;
            jourDebut.setTime(miseAjour); // Mettre à jour le temps avec la nouvelle valeur

          }
        }
        const newTime = jourDebut.getTime() + 24 * 60 * 60 * 1000; // Ajouter un jour
            jourDebut = new Date(newTime); // Mettre à jour jourDebut pour passer au jour suivant
      }

    });

    return appointments;
  }

  const availableAppointments = generateAppointments();

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3>Liste des Rendez-Vous Disponibles :</h3>
          <div className="card">
            <div className="card-body">
              <table className="table table-light" style={{ borderSpacing: '10px', tableLayout: 'fixed' }}>
                <thead>
                  <tr>
                    <th>
                      <h6>Professionnel</h6>
                    </th>
                    <th>
                      <h6>Type de Rendez-Vous</h6>
                    </th>
                    <th>
                      <h6>Description</h6>
                    </th>
                    <th>
                      <h6>Date de Rendez-Vous</h6>
                    </th>
                    <th>
                      <h6>Action</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {availableAppointments.map((appointment, index) => (
                    <tr key={`${appointment.id}-${appointment.appointmentTime.getTime()}`}>
                      <td>{appointment.professionnel}</td>
                      <td>{appointment.profession}</td>
                      <td>{appointment.description}</td>
                      <td>{appointment.appointmentTime.toLocaleString()}</td>
                      <td>
                        <button
                          onClick={() => handleAddRdv(appointment)}
                          className="btn btn-outline-secondary"
                        >
                          Réserver :
                          <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>
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

export default ReserverSearchPro;
