import axios from 'axios';

const api = axios.create({
  baseURL: 'https://testnets-api.opensea.io/api/v1/asset/'
})

export default api;