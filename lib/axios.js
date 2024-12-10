import axios from 'axios';

export default axios.create({
    baseURL: 'http//api.',
    headers:{
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials:true,
});