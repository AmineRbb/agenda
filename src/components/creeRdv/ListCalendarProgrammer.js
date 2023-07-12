import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { voirCalendrierPro } from '../../redux/slices/rdv';

function ListCalendarProgrammer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user =  useSelector((state) => state.userSlice);
  const token = localStorage["agendaToken"]; 

  const [data, setData] = useState({
    professionalId:'ici c ladmin mais cest aussi a completer',
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

    const handleCreateCalendar = () => {
        dispatch(voirCalendrierPro(data)).then(() => {
            navigate(`/listRdvProgramme`);
        })
    }

    const handleSeeProgramCalendar = () => {
        navigate(`/home`);
    }

    return (
        <div className="p-1 m-1">
            <div className="card">
                <div className="card-body">
                    <h6>Vous n'avez pas l'autorization pour ouvrir cette page.</h6>
                </div>
            </div>
        </div>
    )
}

export default ListCalendarProgrammer