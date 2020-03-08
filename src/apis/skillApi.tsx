import axios from './axiosConfig';

export const getSkill = (): any => {
    return axios.get('/skills').then(response => response.data);
};
