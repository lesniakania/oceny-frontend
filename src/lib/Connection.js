import Axios from 'axios';

class Connection {
  static get(path, callback) {
    Axios.get(`${Connection.BASE_URL}${path}`).then(callback)
  }

  static post(path, data, callback) {
    Axios.post(`${Connection.BASE_URL}${path}`, data).then(callback)
  }
}

Connection.BASE_URL = 'http://localhost:3001/api';

export default Connection;
