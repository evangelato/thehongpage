import axios from './axiosConfig';

export const getSkill = (): any => {
    return axios
        .get('/skills')
        .then(response => response.data)
        .catch(error => console.log('Skill GET API Error', error));
};
