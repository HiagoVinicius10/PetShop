
import axios from "axios";


//Comando para rodar API: json-server --watch db.json
export const api = axios.create({
    baseURL: "http://localhost:3000"
})