import axios from "axios";

const instance = axios.create({
    baseURL: 'https://48ec-2401-4900-6332-22eb-fd50-95a4-c636-5619.ngrok-free.app/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;