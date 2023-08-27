import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { creeCalendar, voirCalendrierPro } from '../../redux/slices/rdv';

function Programmer() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userSlice.connectedUser);

    const [data, setData] = useState({
        description: '',
        typeRdv: '',
        jourDebut: '',
        jourFin: '',
        heureDebut: '',
        heureFin: '',
        minuteDebut: '',
        minuteFin: '',
        dureeRdv: '',
        jourDisponible: [false, true, true, true, true, true, false],
    });

    const handleCreateCalendar = async () => {
        try {

            const [dayDebut, monthDebut, yearDebut] = data.jourDebut.split("/");
            const DateDebut = new Date(yearDebut, monthDebut - 1, dayDebut);

            const [dayFin, monthFin, yearFin] = data.jourFin.split("/");
            const DateFin = new Date(yearFin, monthFin - 1, dayFin);

            const dataReturn = {
                description: data.description,
                typeRdv: data.typeRdv,
                jourDebut: DateDebut,
                jourFin: DateFin,
                heureDebut: data.heureDebut,
                heureFin: data.heureFin,
                minuteDebut: data.minuteDebut,
                minuteFin: data.minuteFin,
                dureeRdv: data.dureeRdv,
                jourDisponible: data.jourDisponible
            };

            await dispatch(creeCalendar(dataReturn)).unwrap();
            navigate(`/calendarCree`);
        } catch (error) {
            console.error(error);
            navigate(`/errorCode`);
        }
    }

    const handleSeeProgramCalendar = async () => {
        try {
            const professionnel = {
                professionnel: user.email
            }
            await dispatch(voirCalendrierPro(professionnel)).unwrap();
            navigate(`/listRdvProgramme`);
        } catch (error) {
            console.error(error);
            navigate(`/errorCode`);
        }
    }

    const handleSetDay = (jourInt) => {
        const dataModifier = { ...data }; // Create a copy of data to modify safely
        dataModifier.jourDisponible[jourInt] = !dataModifier.jourDisponible[jourInt]; // Toggle the value
        setData(dataModifier);
    }

    return (
        <div>
            <div className="p-1 m-1">
                <div className="card">
                    <div className="card-body">
                        <h6>Voir les disponibilités déjà programmée</h6>
                        <div className="text-center">
                            <button
                                onClick={(handleSeeProgramCalendar)}
                                className="btn btn-outline-secondary"> Visualiser vos Disponibilités
                                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                            </button></div>
                        <br /><br />
                        <h6>Programmer une plage de disponibilité pour vos clients</h6>

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
                                        <td>Date de Début des Rendez-Vous (../../..)</td>
                                        <td><input
                                            value={data.jourDebut}
                                            className="form-control"
                                            onChange={(e) => setData({ ...data, jourDebut: e.target.value })}
                                        ></input></td>
                                    </tr>
                                    <tr>
                                        <td>Date de Fin des Rendez-Vous (../../..)</td>
                                        <td><input
                                            value={data.jourFin}
                                            className="form-control"
                                            onChange={(e) => setData({ ...data, jourFin: e.target.value })}
                                        ></input></td>
                                    </tr>
                                    <tr>
                                        <td>Heure de Début d'une Journée</td>
                                        <td><input
                                            value={data.heureDebut}
                                            className="form-control"
                                            onChange={(e) => setData({ ...data, heureDebut: e.target.value })}
                                        ></input></td>
                                    </tr>
                                    <tr>
                                        <td>Minute de Début d'une Journée</td>
                                        <td><input
                                            value={data.minuteDebut}
                                            className="form-control"
                                            onChange={(e) => setData({ ...data, minuteDebut: e.target.value })}
                                        ></input></td>
                                    </tr>
                                    <tr>
                                        <td>Heure de Fin d'une Journée</td>
                                        <td><input
                                            value={data.heureFin}
                                            className="form-control"
                                            onChange={(e) => setData({ ...data, heureFin: e.target.value })}
                                        ></input></td>
                                    </tr>
                                    <tr>
                                        <td>Minute de Fin d'une Journée</td>
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
                                        {['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'].map((jour, index) => (
                                            <button
                                                key={jour}
                                                onClick={() => handleSetDay(index)}
                                                className={`btn ${data.jourDisponible[index] ? 'btn-outline-secondary' : ''}`}
                                            >
                                                {jour}
                                            </button>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <button
                                    onClick={handleCreateCalendar}
                                    className="btn btn-outline-secondary">
                                    Programmer des Disponibilités
                                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programmer
