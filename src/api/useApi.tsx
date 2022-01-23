import axios from 'axios';
import { APILink } from './API';

export const api = axios.create({
  baseURL: APILink,
});
