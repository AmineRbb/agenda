
/** appelé authenticationService, recupérer les données
 * envoyé un post avec les données  
 * récupérer, les stockés dans une variable et les returns
 * (bonus) sinon les garder et en fonction des données, connecté l'user dans le service
 * appelé pour Login
 */
export const authenticationService = (loginUser) => {
    const [data, setData] = useState(null);
    axios.post('http://localhost:8083/api/v1/auth/authenticate', { loginUser })
        .then(response => {
          // Récupérer les données renvoyées par le backend
          setData(response.data);
          return data;
        })
        .catch(error => {
          console.error(error);
        });
    return 
}

/** récupere les informations utilisateurs avec un get et les renvoies
 *  appelé pour parametrer User
 */
export const getInfoUser = (infoUser) => {
}

/** récupere les informations et ajoute un role avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const ajouterRole = (infoUser) => {
}

/** récupere les informations et supprime un role avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const supprimerRole = (infoUser) => {
}

/** récupere les informations et ajoute un user avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const supprimerUtilisateur = (infoUser) => {
}

/** récupere les informations et verif le mdp avec un post et renvoie un boolean
 *  appelé pour parametrer User
 */
export const verificationMdp = (infoUser) => {
}