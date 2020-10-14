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
        default: 
            return state;
    }
};

export default reducer;
