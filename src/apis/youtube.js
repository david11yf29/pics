import axios from 'axios';

const KEY = 'AIzaSyDpdv6EG5_7p1CkINBYI_2RM-T8GxaePVE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
})