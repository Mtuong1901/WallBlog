import {jwtDecode} from 'jwt-decode';
import { login, logout } from '../../redux/slices/authSlice';

export const checkAuth = (dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            console.log('Decoded Token:', decodedToken);
            const user = decodedToken || {}; 
            console.log('User:', user);
            dispatch(login({ token, user }));
        } catch (e) {
            console.error('Invalid token or failed to decode', e);
            dispatch(logout());
        }
    } else {
        dispatch(logout());
    }
};
