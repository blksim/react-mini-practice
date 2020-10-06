import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://redux-posts-1.firebaseio.com/'
});

export default instance;