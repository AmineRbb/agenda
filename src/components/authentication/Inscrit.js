import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Inscrit() {
  const navigate = useNavigate();
  const handleConnexion = () => {
    navigate(`/login`);
  }

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h6>Félicitations, vous vous êtes inscrit, vous pouvez désormais vous connecter.</h6>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button
              onClick={handleConnexion}
              className="btn btn-outline-success" >
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Se Connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inscrit