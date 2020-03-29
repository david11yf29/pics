import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 334312b1ace7d83eecd4d66794f99e6a73ffa6ed58b3c0eb23d4620f8c332ad7'
    }
});