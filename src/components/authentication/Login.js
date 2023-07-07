import { faCircleCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { authenticationService } from '../../service/service';
import { setToken } from '../../redux/reducers/userReducer';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();



  const handleSignup = () => {
    const loginUser = { email: email, password: password };

    authenticationService(loginUser)
      .then((data) => {
        if (data.token === "error") {
          navigate(`/badAuthentication`);
        }
        else {
          //dispatch(setToken(data.token));
          localStorage.setItem("agendaToken", data.token);
          navigate(`/home`);
        }
      })

  };

  useEffect(() => {
  }, [dispatch]);


  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body" style={{minWidth: '150 rem', marginLeft: '100px', marginRight: '100px'}}>
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
                  type="password"
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