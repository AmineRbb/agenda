import { faMagnifyingGlass, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { creeCalendar, voirCalendrierPro } from '../../redux/slices/rdv';

function Programmer() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user =  useSelector((state) => state.userSlice);
  const token = localStorage["agendaToken"]; 
  const nameee = JSON.stringify(user);
  const nameu = token;

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
    jourDisponible: [true, true, true, true, true, false, false],
});

    const handleCreateCalendar = () => {
        dispatch(creeCalendar(data)).then(() => {
            //if ca na pas 403 :
            navigate(`/calendarCree`);
            //else : renvoyer errorCreationCal
        })
    }

    const handleSeeProgramCalendar = () => {
        const profession = {
            professionnel:'admin@gmail.com'
        }
        dispatch(voirCalendrierPro(profession));
        navigate(`/listRdvProgramme`);
    }

  return (
    <div>
      <div className="p-1 m-1">
        <div className="card">
          <div className="card-body">
            <h6>Voir les disponibilités déjà programmer</h6>
          <div className="text-center">
                        <button
                            onClick={(handleSeeProgramCalendar)}
                            className="btn btn-outline-secondary"> Visualiser vos Disponibilités 
                            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                        </button></div> 
                        <br /><br />
            <h6>Programmer une plage de rendez-vous disponible pour vos clients</h6>
            
            <div>
                    <table className="table table-light">
                        <tbody>
                            <tr>
                                <td>Description</td>
                                <td><input
                                    value={data.description}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, description: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Type de Rendez-vous</td>
                                <td><input
                                    value={data.typeRdv}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, typeRdv: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Jour du Début des Rendez-Vous</td>
                                <td><input
                                    value={data.jourDebut}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, jourDebut: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Heure du Début des Rendez-Vous</td>
                                <td><input
                                    value={data.heureDebut}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, heureDebut: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Minute du Début des Rendez-Vous</td>
                                <td><input
                                    value={data.minuteDebut}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, minuteDebut: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Jour de Fin des Rendez-Vous</td>
                                <td><input
                                    value={data.jourFin}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, jourFin: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Heure de Fin des Rendez-Vous</td>
                                <td><input
                                    value={data.heureFin}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, heureFin: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Minute de Fin des Rendez-Vous</td>
                                <td><input
                                    value={data.minuteFin}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, minuteFin: e.target.value })}
                                ></input></td>
                            </tr>
                            <tr>
                                <td>Durée de chaque Rendez Vous</td>
                                <td><input
                                    value={data.dureeRdv}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, dureeRdv: e.target.value })}
                                ></input></td>
                            </tr>
                            
                        </tbody>
                    </table>

                    <div className="text-center">
                        <button
                            onClick={handleCreateCalendar}
                            className="btn btn-outline-secondary"> Programmer des Disponibilités
                            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                        </button></div></div>
          
          </div>
        </div>
      </div>
      <div>
        <h6>nameu est {nameu} </h6>
        <h6>le user est {user.token}</h6>
      </div>
    </div>
  );
}

export default Programmer

//onClick={handleSignup}

/* <tr>
                                <td>Liste des jours ou vous êtes Disponible</td>
                                <td><input
                                    value={data.jourDisponible}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, jourDisponible: e.target.value })}
                                ></input></td>
                            </tr> */