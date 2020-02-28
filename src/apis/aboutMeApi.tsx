import axios from './axiosConfig';

export const getAboutMe = (): any => {
    return axios
        .get('/aboutMe')
        .then(response => response.data)
        .catch(error => console.log('API Error: ', error));
};
