import axios from './axiosConfig';

export const getHome = (): any => {
    return axios.get('/home').then(response => response.data);
};
