import { faCircleCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchToken, getUserInfo, getUserRoles } from '../../redux/slices/user';
import { getAllRdv } from '../../redux/slices/rdv';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleSignIn = async () => {
    const loginUser = { email, password };
    try {
      await dispatch(fetchToken(loginUser)).unwrap(); // Utilisez .unwrap() pour obtenir la valeur résolue
      dispatch(getUserRoles()).then(() => {
        dispatch(getUserInfo()).then(() => {
          dispatch(getAllRdv()).then(() => {
            navigate(`/home`);
          });
        });
      });
    } catch (error) {
      console.error(error);
      navigate(`/badAuthentication`);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSignIn();
    }
  };

  useEffect(() => {
    setIsButtonActive(email !== '' && password !== '');
  }, [email, password]);

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body" style={{ minWidth: '150 rem', marginLeft: '100px', marginRight: '100px' } }>
          <h6 className="text-center">Veuillez entrer vos identifiants </h6>
          <table className="table table-light">
            <tbody>
              <tr>
                <td>Email</td>
                <td><input
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyUp={handleKeyUp}
                /></td>
              </tr>
              <tr>
                <td>Mot de Passe</td>
                <td><input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={handleKeyUp}
                /></td>
              </tr>
            </tbody>
          </table>
          <div>
            <h6 className="text-center">
              <button
                onClick={handleSignIn}
                className="btn btn-success"
                style={{ marginRight: '10px', marginTop: '5px' }}
                disabled={!isButtonActive}
              >
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Connexion
              </button>
            </h6>
          </div>
          <div className="card">
            <div className="card-body bg-light"   style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div className="col-lg-6">
                <h6 className="text-center">Je n'ai pas de compte :</h6>
                <h6 className="text-center">
                  <button
                    onClick={() => navigate(`/register`)}
                    className="btn btn-outline-secondary"
                    style={{ marginRight: '10px', marginTop: '5px' }}
                  >
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> S'inscrire
                  </button>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login