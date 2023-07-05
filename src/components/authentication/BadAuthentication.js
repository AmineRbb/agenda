import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BadAuthentication() {
    const navigate = useNavigate();
    return (
        <div className="p-1 m-1">
            <div className="card">
                <div className="card-body">
                    <h6>Le nom d'utilisateur ou le mot de passe ne correspondent pas.</h6>
                    <h6 className="text-center">
                        <button
                            onClick={() => navigate(`/login`)}
                            className="btn btn-outline-secondary"> 
                            <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon> Retour
                        </button></h6>
                </div>
            </div>
        </div>
    )
}

export default BadAuthentication