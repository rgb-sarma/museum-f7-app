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
  },
  fetchTypes: () => {
    return axiosInstance.get('/get_types')
  },
  fetchExhibitions: () => {
    return axiosInstance.get('/all_exibitions')
  },
  createTour: (tour) => {
    return axiosInstance.post('/tour', tour)
  },
  getAllTours: () => {
    return axiosInstance.get('/tour')
  },
  test: () => {
    return axiosInstance.post('/review', {
      rev_value: 3,
      // ext_id: 1,
      exn_id: 3,
      // rev_description: 'xd'
    })
  },
  
  
}

export default api;
