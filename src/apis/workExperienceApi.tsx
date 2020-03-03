import axios from './axiosConfig';

export const getWorkExperience = (): any => {
    return axios
        .get('/workExperiences')
        .then(response => response.data)
        .catch(error => console.log('Work Experience GET API Error: ', error));
};
