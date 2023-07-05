import axios from "axios";
//import { useSelector } from "react-redux";
//import { useState } from "react";

/*export const authenticationService = async (loginUser) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/auth/authenticate', { loginUser });

    if (response.status === 403) {
      const updatedData = {
        ...response.data,
        token: "error"
      };
      return updatedData;
    } else {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    const updatedData = {
      token: "error"
    };
    return updatedData;
    throw error;
  }
};*/

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
  }
};


export const registerService = async (registerUser) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/auth/register', registerUser);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const parametrerUserService = async (paramUser) => {
  try {
    const response = await axios.post('http://localhost:8083/api/v1/main/modifInfo', paramUser);
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      token: "error"
    };
    return updatedData;
    //throw error;
  }
};



/** récupere les informations et ajoute un role avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const ajouterRoleService = async (headers, dto) => {
  //const [data, setData] = useState(null);
  try {
    const response = await axios.post('http://localhost:8083/api/v1/admin/addRoleUtilisateur', dto, {headers});
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      booleanPage: "false"
    };
    return updatedData;
    //throw error;
  }
}

/** récupere les informations et supprime un role avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const supprimerRoleService = async (headers, dto) => {
  //const [data, setData] = useState(null);
  try {
    const response = await axios.post('http://localhost:8083/api/v1/admin/removeRoleUtilisateur', dto, {headers});
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      booleanPage: "false"
    };
    return updatedData;
    //throw error;
  }
  
}

/** récupere les informations et ajoute un user avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const supprimerUtilisateurService = async (headers, dto) => {
  //const [data, setData] = useState(null);
  try {
    const response = await axios.post('http://localhost:8083/api/v1/admin/deleteUtilisateur', dto, {headers});
    return response.data;
  } catch (error) {
    console.error(error);
    const updatedData = {
      booleanPage: "false"
    };
    return updatedData;
    //throw error;
  }
}

/** récupere les informations et verif le mdp avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const verificationMdpService = async (verifMdp) => {
  //const [data, setData] = useState(null);
  try {
    const response = await axios.post('http://localhost:8083/api/v1/main/modifInfo', verifMdp);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
/*
export const isLoginService = async () => {
  const user = useSelector((state) => state.user);
  const token = user.token;
  const returnable = {
    isLogin:"false",
    isAdmin:false
  }
  try {
    const response = await axios.post('http://localhost:8083/api/v1/auth/roles',token);
    const userRoles = response.data.roles;
    const isAdmin = userRoles.some(role => role === 'admin');
    console.log('User Roles:', userRoles);
    console.log('Is Admin:', isAdmin);
    returnable.isLogin="true";
    returnable.isAdmin=isAdmin;
    return returnable;
  } catch (error) {
    console.error(error);
    return returnable
  }
}*/