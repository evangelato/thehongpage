import axios from './axiosConfig';

export const getEducation = (): any => {
    return axios
        .get('/education')
        .then(response => response.data)
        .catch(error => console.log('Education GET API Error: ', error));
};
