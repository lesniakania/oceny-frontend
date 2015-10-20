import { EventEmitter } from 'events';
import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import Connection from '../lib/Connection';

const CHANGE_EVENT = 'change';

class SubmissionStore extends EventEmitter {
  constructor() {
    super();

    this.submission = null;
  }

  getSubmission(submissionId) {
    return this.submission;
  }

  addChangeListener(listener) {
    this.addListener(CHANGE_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(CHANGE_EVENT, listener);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
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
