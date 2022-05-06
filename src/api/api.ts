import axios from 'axios';

const APILink = 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: APILink,
});

api.defaults.withCredentials = true;
