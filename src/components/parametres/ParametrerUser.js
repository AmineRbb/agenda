import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ParametrerUser() {
  const navigate = useNavigate();
  const users = useSelector((state) => state.userSlice.connectedUser);
  const roles = useSelector((state) => state.userSlice.roles);

  const datePrint = new Date(users.dateOfBirth);
  const day = datePrint.getDate();
  const month = datePrint.getMonth() + 1;
  const year = datePrint.getFullYear();
  const datePrintable = `${day}/${month}/${year}`;

  const recupRoles = (roles) => {
    let infoFinal = "";
    {

      if (roles.name === "ADMIN") {
        infoFinal = "Administrateur";
      }
      if (roles.name === "PRO") {
        infoFinal = "Professionnel";
      }
      if (roles.name === "CLIENT") {
        infoFinal = "Client";
      }
    };
    return infoFinal;
  };

  return (
    <div className="p-1 m-1">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Informations Utilisateur</h3>
          {users ? (
            <div>
              <table className="table table-light">
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>{users.email}</td>
                  </tr>
                  <tr>
                    <td>Prénom</td>
                    <td>{users.firstname}</td>
                  </tr>
                  <tr>
                    <td>Nom</td>
                    <td>{users.lastname}</td>
                  </tr>
                  <tr>
                    <td>Date de naissance</td>
                    <td>{datePrintable}</td>
                  </tr>
                  <tr>
                    <td>Numéro de téléphone</td>
                    <td>{users.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>Adresse</td>
                    <td>{users.adress}</td>
                  </tr>
                  <tr>
                    <td>Ville</td>
                    <td>{users.city}</td>
                  </tr>
                  <tr>
                    <td>Roles</td>
                    {roles.map((rol) => (
                      <tr key={rol.id}>
                        <td>{recupRoles(rol)}</td>
                      </tr>
                    ))}
                  </tr>
                </tbody>
              </table>

              <h6> Modifier{' '} <button onClick={() => navigate(`/modifierUser`)} className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
              </button></h6></div>
          ) : (<p>Chargement des données ...</p>)}
        </div>
      </div>
    </div>
  );
}

export default ParametrerUser;
