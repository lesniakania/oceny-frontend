import ActionTypes from '../constants/ActionTypes';
import Connection from '../lib/Connection';

const _requestPerformRating = (id) => {
  return {
    type: ActionTypes.PERFORM_RATING,
    id: id
  }
}

const _ratingPerfomed = (submission) => {
  return {
    type: ActionTypes.RATING_PERFORMED,
    submission: submission
  };
}

const _performRating = (submission, rate) => {
  return (dispatch) => {
    const id = submission.id
    dispatch(_requestPerformRating(id));

    return Connection.post(`/submissions/${id}/rate`, { rate: rate })
      .then((response) => {
        dispatch(_ratingPerfomed(response.data))
      });
  };
}

const _requestSubmission = (id) => {
  return {
    type: ActionTypes.REQUEST_SUBMISSION,
    id: id
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
