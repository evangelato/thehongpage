import axios from './axiosConfig';

export const getProject = (): any => {
    return axios
        .get('/projects')
        .then(response => response.data)
        .catch(error => console.log('API Error: ', error));
};
