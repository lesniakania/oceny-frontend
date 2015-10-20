import BaseStore from './BaseStore';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import Connection from '../lib/Connection';

class SubmissionStore extends BaseStore {
  constructor() {
    super();

    this.submission = null;
  }

  getSubmission(submissionId) {
    return this.submission;
  }
}

const submissionStore = new SubmissionStore();

submissionStore.dispatchToken = AppDispatcher.register((payload) => {
  let id;
  switch (payload.action.actionType) {
  case ActionTypes.REQUEST_SUBMISSION:
    id = payload.action.id;
    Connection.get(`/submissions/${id}`).then((response) => {
      submissionStore.submission = response.data;
      submissionStore.emitChange();
    });
    break;
  case ActionTypes.PERFORM_RATING:
    id = payload.action.id;
    const rate = payload.action.rate;
    Connection.post(`/submissions/${id}/rate`, { rate: rate }).then(
      (response) => {
        submissionStore.submission = response.data;
        submissionStore.emitChange();
    });
    break;

  default:
    // Do nothing
  }
});

export default submissionStore;
