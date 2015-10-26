import ActionTypes from '../constants/ActionTypes';
import Connection from '../lib/Connection';

const _performRating = (submission, rate) => {
  return {
    type: ActionTypes.PERFORM_RATING,
    submission: submission,
    rate: rate
  }
}

const _requestSubmission = (id) => {
  return {
    type: ActionTypes.REQUEST_SUBMISSION
  };
}

const _receiveSubmission = (submission) => {
  return {
    type: ActionTypes.RECEIVE_SUBMISSION,
    submission: submission
  };
}

const _fetchSubmission = (id) => {
  return (dispatch) => {
    dispatch(_requestSubmission(id));

    return Connection.get(`/submissions/${id}`)
      .then((response) => {
        dispatch(_receiveSubmission(response.data))
      });
  };
}

export const performRating = _performRating;
export const fetchSubmission = _fetchSubmission;
