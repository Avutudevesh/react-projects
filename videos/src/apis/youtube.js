import axios from 'axios';

const KEY = 'AIzaSyBrlndz3u-9bV6CvHBjcX-Zny-Slo0hRw8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});
