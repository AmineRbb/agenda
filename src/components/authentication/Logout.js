import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/reducers/userReducer';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setToken("notlogin"));
    navigate(`/home`);

  }

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h6>Êtes vous sur de vouloir vous déconnecter ?</h6>
          <h6>
            <button
              onClick={handleLogout}
              className="btn btn-outline-success">Oui
            </button>
            {"      "}
            <button className="btn btn-outline-danger">
              Non
            </button>

          </h6>
        </div>
      </div>
    </div>
  );
}

export default Logout