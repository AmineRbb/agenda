import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CalendarCreeNotif() {
    const navigate = useNavigate();
    return (
        <div className="p-1 m-1">
            <div className="card">
                <div className="card-body">
                    <h6>Le calendrier a été crée.</h6>
                    <div className="text-center">
                        <h6><button
                            onClick={() => navigate(`/listRdvProgramme`)}
                            className="btn btn-outline-secondary"> 
                            <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon> Retour
                        </button></h6></div>
                </div>
            </div>
        </div>
    )
}

export default CalendarCreeNotif