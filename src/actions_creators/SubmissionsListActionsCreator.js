import ActionTypes from '../constants/ActionTypes';
import Connection from '../lib/Connection';

const _requestSubmissionsList = (submissionType) => {
  return {
    type: ActionTypes.REQUEST_SUBMISSIONS_LIST,
    submission_type: submissionType
  };
}

const _receiveSubmissionsList = (submissions) => {
  return {
    type: ActionTypes.RECEIVE_SUBMISSIONS_LIST,
    submissions: submissions
  };
}

const _fetchSubmissionsList = (submissionType) => {
  return (dispatch) => {
    dispatch(_requestSubmissionsList(submissionType));

    return Connection.get(`/submissions/${submissionType}`)
      .then((response) => {
        dispatch(_receiveSubmissionsList(response.data))
      });
  };
}

export const fetchSubmissionsList = _fetchSubmissionsList;
