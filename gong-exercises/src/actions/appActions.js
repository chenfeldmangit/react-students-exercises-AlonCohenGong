export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const loginUser = (loginCred) => ({
    type: LOGIN,
    payload: {loginCred},
});

export const logoutUser = () => ({
    type: LOGOUT
});


