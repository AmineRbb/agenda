import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllRdv, voirCalendrierPro, voirCalendrierType } from '../../redux/slices/rdv';


function Reserver() {
  const [data, setData] = useState({
    type: '',
    pro: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchCalendrierPro = async () => {
    try {
      const sendObject = { professionnel: data.pro };
      await dispatch(voirCalendrierPro(sendObject)).unwrap();
      await dispatch(getAllRdv()).unwrap();
      navigate(`/reserverSearchProfessionnel`);
    }
    catch (error) {
      console.error(error);
      navigate(`/errorCode`);
    }
  }

  const handleSearchCalendrierType = async () => {
    try {
      const sendObject = { type: data.type };
      await dispatch(voirCalendrierType(sendObject)).unwrap();
      await dispatch(getAllRdv()).unwrap();
      navigate(`/reserverSearchProfessionnel`);
    }
    catch (error) {
      console.error(error);
      navigate(`/errorCode`);
    }
  }


  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h5>Cherchez un rendez-vous en fonction de ce que vous rechercher</h5>
          <div className="d-flex align-items-center">
            <h6>Chercher un domaine de profession</h6>
            <input
              value={data.type}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, type: e.target.value })}
              style={{ maxWidth: '350px' }}
            ></input>
            <button onClick={handleSearchCalendrierType} className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </div>
          <div className="d-flex align-items-center">
            <h6>Chercher un professionnel </h6>
            <input
              value={data.pro}
              className="form-control me-2"
              onChange={(e) => setData({ ...data, pro: e.target.value })}
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