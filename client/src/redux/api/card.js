import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:8000/" });

 export const getCard = () => API.get("/")
 export const getCardByID = (id) => API.get(`/${id}`);