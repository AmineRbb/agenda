import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllRdv, voirCalendrierPro } from '../../redux/slices/rdv';


function Reserver() {
  const [data, setData] = useState({
    type: '',
    pro: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rdvSlice = useSelector((state) => state.rdvSlice);
  const isLoggedIn = useSelector((state) => state.userSlice.isLoggedIn);

  const handleSearchCalendrierPro = () => {
    dispatch(voirCalendrierPro(data.pro)).then((data) => {
      dispatch(getAllRdv()).then((data)=> {
        navigate(``);
      }) 
    })
  }


  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h5>Cherchez un rendez-vous en fonction de ce que vous rechercher</h5>
          <div className="d-flex align-items-center">
            <h6>Chercher un domaine de profession</h6>
            <input
              value={data.utilisateur}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
              style={{ maxWidth: '350px' }}
            ></input>
            <button onClick={handleSearchCalendrierPro} className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button>
          </div>
          <div className="d-flex align-items-center">
            <h6>Chercher un professionnel </h6>
            <input
              value={data.utilisateur}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, utilisateur: e.target.value })}
              style={{ maxWidth: '350px' }} 
            ></input>
            <button onClick={handleSearchCalendrierPro} className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserver