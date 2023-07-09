export const setRdvList = (rdvList) => ({
    type: 'SET_RDVLIST',
    payload: rdvList,
});


const initialState = {
    rdv: {
    description: '',
    typeRdv: '',
    jourDebut: '',
    jourFin: '',
    heureDebut: '',
    heureFin: '',
    minuteDebut: '',
    minuteFin: '',
    dureeRdv: '',
    jourDisponible: ''
    }
};

const rdvListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RDVLIST':
            return {
                ...state,
                rdvList: action.payload,
            };
        default:
            return state;
    }
};

export default rdvListReducer;