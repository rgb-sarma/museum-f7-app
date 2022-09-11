import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: 'http://306k122.e2.mars-hosting.com/api',
  timeout: 1000,
})

let api = {
  register: (user) => {
    return axiosInstance.post('/register', user)
  },
  login: (user) => {
    return axiosInstance.post('/login', user)
  }
  
}

export default api;
