export const setAppelService = (isLoginAppel) => ({
    type: 'SET_ISLOGINAPPEL',
    payload: isLoginAppel,
});


const initialState = {
    isLoginAppel:false,
};

const appelServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ISLOGINAPPEL':
            return {
                ...state,
                isLoginAppel: action.payload,
            };
        default:
            return state;
    }
};

export default appelServiceReducer;