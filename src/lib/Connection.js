import Axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

class Connection {
  get(path) {
    return Axios.get(`${BASE_URL}${path}`)
  }

  post(path, data) {
    return Axios.post(`${BASE_URL}${path}`, data)
  }
}

const connection = new Connection();

export default connection;
