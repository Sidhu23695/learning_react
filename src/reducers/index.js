const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { 
                ...state 
            };
        case 'USERS_RECEIVED':
            return { 
                ...state, 
                users: action.response
            };
        case 'SAVE_USER':
            return { 
                ...state 
            };
        case 'USER_SAVED':
            return { 
                ...state ,
                userSaved: true
            };
        default: 
            return state;
    }
};

export default reducer;
