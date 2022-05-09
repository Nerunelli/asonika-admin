import axios from 'axios';

const APILink = 'http://localhost:8000/api';
// const APILink = 'http://84.201.165.118:8000/api';

export const api = axios.create({
  baseURL: APILink,
});

api.defaults.withCredentials = true;
