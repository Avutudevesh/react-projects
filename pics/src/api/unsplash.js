import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers :{
        Authorization: 'Client-ID b16631fb8116d72ba7a4f5a78e0da99000c7511ddf2124fa76ad2d36d785f6a2'
    }
});