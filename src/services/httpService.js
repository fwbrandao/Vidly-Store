import axios from 'axios';
import { toast } from 'react-toastify';

// handle error globaly
axios.interceptors.response.use(null, error => {
    const expectedError = error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

    if(!expectedError) {
        console.log('Loging error', error);
        toast.error('Unexpected error!');
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};