import React from 'react';
import './customAm.css';
import { useNavigate } from 'react-router-dom';

function ParametrerAdmin() {
  const navigate= useNavigate();
  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Paramètres Administrateurs</h3>
          <h6> Modifier les informations des utilisateurs de Meetings</h6>
          <button 
          onClick={() => navigate(`/admin/ajouterRole`)}
          className="customam btn btn-outline-secondary">
            Ajouter un Rôle
          </button><br/> <br/>
          <button 
          onClick={() => navigate(`/admin/supprimerRole`)}
          className="customam btn btn-outline-secondary">
            Supprimer un Rôle
          </button> <br/> <br/>
          <button 
          onClick={() => navigate(`/admin/supprimerUtilisateur`)}
          className="customam btn btn-outline-secondary">
            Supprimer un Utilisateur
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParametrerAdmin