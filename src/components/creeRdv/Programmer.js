import { faMagnifyingGlass, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Programmer() {

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
    jourDisponible: '',
});

  return (
    <div>
      <div className="p-1 m-1">
        <div className="card">
          <div className="card-body">
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
                                    value={data.heureDebut}
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
                            <tr>
                                <td>Liste des jours ou vous êtes Disponible</td>
                                <td><input
                                    value={data.jourDisponible}
                                    className="form-control"
                                    onChange={(e) => setData({ ...data, jourDisponible: e.target.value })}
                                ></input></td>
                            </tr>
                        </tbody>
                    </table>

                    <h6 className="text-center">
                        <button
                            
                            className="btn btn-outline-secondary"> S'inscrire
                            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                        </button></h6></div>
          
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