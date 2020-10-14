export const getUsers = () => ({
    type: 'GET_USERS',
});

export const saveUser = (payload) => ({
    type: 'SAVE_USER',
    data: payload
})