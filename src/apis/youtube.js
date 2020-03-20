import axios from 'axios';

// const KEY = 'AIzaSyCfbOqs-QwSWCYwIZ6Q5BX_0412XpuVzsc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});