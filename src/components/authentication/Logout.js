import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { disconnect } from '../../redux/slices/user';


function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.setItem("agendaToken", "");
    dispatch(disconnect());
    navigate(`/home`);
  }

  const handleNotLogout = () => {
    navigate(`/home`)
  }

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h6>Êtes vous sur de vouloir vous déconnecter ?</h6>
          <h6>
            <button
              onClick={handleLogout}
              className="btn btn-outline-success">
              Oui
            </button>
            {"      "}
            <button
              onClick={handleNotLogout}
              className="btn btn-outline-danger">
              Non
            </button>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Logout