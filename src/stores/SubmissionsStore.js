import BaseStore from './BaseStore';
import Connection from '../lib/Connection';

class SubmissionsStore extends BaseStore {
  getSubmissions(type) {
    return Connection.get(`/submissions/${type}`);
  }
}

const submissionsStore = new SubmissionsStore();

export default submissionsStore;
