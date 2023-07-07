import axios from "axios";

export const authenticationService = async (loginUser) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/auth/authenticate', loginUser);
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      token: "error"
    };
    return updatedData;
  };
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


export const parametrerUserService = async (param) => {
  try {
    const response = await axios.get('http://localhost:8083/api/v1/main/modifInfo', {headers:param});
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      pageReturn: "error"
    };
    return updatedData;
  };
};



/** récupere les informations et ajoute un role avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const ajouterRoleService = async (headers, dto) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/admin/addRoleUtilisateur', dto, {headers});
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
    const response = await axios.post('http://localhost:8083/api/v1/admin/removeRoleUtilisateur', dto, {headers});
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
    const response = await axios.post('http://localhost:8083/api/v1/admin/deleteUtilisateur', dto, {headers});
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

export const isLoginService = async (headers, user) => {
  const token = user.token;
  const returnable = {
    isLogin:"false",
    isAdmin:false
  };
  try {
    const response = await axios.post('http://localhost:8083/api/v1/auth/roles',token, {headers});
    const userRoles = response.data.roles;
    const isAdmin = userRoles.some(role => role.name === 'ADMIN');
    console.log('User Roles:', userRoles);
    console.log('Is Admin:', isAdmin);
    returnable.isLogin="true";
    returnable.isAdmin=isAdmin;
    return returnable;
  } catch (error) {
    console.error(error);
    return returnable;
  };
}