import { faCircleCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
//import { setUser } from '../../redux/reducers/userReducer';
//import axios from 'axios';
import { authenticationService } from '../../service/service';
import { setToken } from '../../redux/reducers/userReducer';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  //const user = { name : 'Test User', email : 'kk@gmail.com' };


  const handleSignup = () => {
    const loginUser = { email: email, password: password };

    authenticationService(loginUser)
      .then((data) => {
        if (data.token === "error") {
          //setData(data);
          navigate(`/badAuthentication`);
        }
        else {
          //setData(data);
          dispatch(setToken(data.token));
          navigate(`/home`);
        }
      })

  };

  useEffect(() => {
    // Récupérer les informations utilisateur depuis le backend


    // Sauvegarder l'utilisateur dans Redux
    //dispatch(setUser(user));
  }, [dispatch]);
  let userFromState = useSelector((state) => state.user);


  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h6>{userFromState.name}</h6>
          <h6 className="text-center">Veuilliez entrer vos identifiants </h6>
          <table className="table table-light">
            <tbody>
              <tr>
                <td>Email</td>
                <td><input
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input></td>
              </tr>
              <tr>
                <td>Mot de Passe</td>
                <td><input
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input></td>
              </tr>
            </tbody>
          </table>
          <h6 className="text-center">
            <button
              onClick={handleSignup}
              className="btn btn-success"
              style={{ marginRight: '10px', marginTop: '5px' }}
            >
              <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Connexion
            </button></h6>

          <div className="card">
            <div className="card-body bg-light">
              <div className="col-lg-6">
                <h6 className="text-center">Je n'ai pas de compte :
                </h6>
                <h6 className="text-center">
                  <button
                    onClick={() => navigate(`/register`)}
                    className="btn btn-outline-secondary"
                    style={{ marginRight: '10px', marginTop: '5px' }}
                  >
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> S'inscrire
                  </button></h6>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Login