import axios from 'axios'

const mainInstance = axios.create({
    baseURL : 'https://secure-reaches-62123.herokuapp.com/',
    timeout : 10000,
  })

mainInstance.interceptors.request.use(
config => {
    const access = window.localStorage.getItem('access');
    if(access) config.headers.Authorization = 'Token ' + access;
    return config;
},
error => {
    Promise.reject(error)
});

export default mainInstance