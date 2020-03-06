import axios from './axiosConfig';

export const getHobby = (): any => {
    return axios
        .get('/hobbies')
        .then(response => response.data)
        .catch(error => console.log('Hobbies GET API Error: ', error));
};
