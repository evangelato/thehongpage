export const baseUrl =
    process.env.NODE_ENV === 'production'
        ? 'https://thehongpage-backend.herokuapp.com/api'
        : 'http://localhost:4000/api';
