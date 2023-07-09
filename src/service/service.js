import axios from "axios";
import { setIsLogin, setIsPro, setIsAdmin, setUser } from "../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { setAppelService } from "../redux/reducers/appelServiceReducer";

export const useAuthentication = () => {
  const dispatch = useDispatch();

  const authenticationService = async (loginUser) => {
    try {
      const responseLogin = await axios.post('http://localhost:8083/api/v1/auth/authenticate', loginUser);


      const headers = {
        Authorization: `Bearer ${responseLogin.data.token}`,
      };


      const responseRoles = await axios.post('http://localhost:8083/api/v1/auth/roles', responseLogin.data.token, { headers });
      dispatch(setIsLogin(true));
      dispatch(setIsPro(responseRoles.data.roles.some(roles => roles.name === 'PRO')));
      dispatch(setIsAdmin(responseRoles.data.roles.some(roles => roles.name === 'ADMIN')));
      localStorage.setItem("agendaToken", responseLogin.data.token);

      return responseLogin.data;
    } catch (error) {
      console.error(error);
      const updatedData = {
        token: "error"
      };
      return updatedData;
    }
  };

  return authenticationService;
};



export const registerService = async (registerUser) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/auth/register', registerUser);
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      token: "error"
    };
    return updatedData;
  };
};

export const useParametrerUser = () => {
  const dispatch = useDispatch();

  const parametrerUserService = async () => {
    try {

      const token = localStorage["agendaToken"];
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get('http://localhost:8083/api/v1/main/modifInfo', { headers });
      dispatch(setUser(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
      const updatedData = {
        pageReturn: "error"
      };
      return updatedData;
    };
  };

  return parametrerUserService;
}



/** récupere les informations et ajoute un role avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const ajouterRoleService = async (headers, dto) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/admin/addRoleUtilisateur', dto, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      booleanPage: "false"
    };
    return updatedData;
  };
}

/** récupere les informations et supprime un role avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const supprimerRoleService = async (headers, dto) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/admin/removeRoleUtilisateur', dto, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      booleanPage: "false"
    };
    return updatedData;
  };

}

/** récupere les informations et ajoute un user avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const supprimerUtilisateurService = async (headers, dto) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/admin/deleteUtilisateur', dto, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      booleanPage: "false"
    };
    return updatedData;
  };
}

/** récupere les informations et verif le mdp avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const verificationMdpService = async (verifMdp) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/main/modifInfo', verifMdp);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  };
}
export const useIsLogin = () => {
  const dispatch = useDispatch();

  const isLoginService = async () => {
    const token = localStorage["agendaToken"];
    const returnable = {
      token: token,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const responseRoles = await axios.post('http://localhost:8083/api/v1/auth/roles', token, { headers });
      dispatch(setIsLogin(true));
      dispatch(setIsPro(responseRoles.data.roles.some(roles => roles.name === 'PRO')));
      dispatch(setIsAdmin(responseRoles.data.roles.some(roles => roles.name === 'ADMIN')));
      dispatch(setAppelService(true));
      return returnable;
    } catch (error) {
      console.error(error);
      return returnable;
    };
  }

  return isLoginService;
}