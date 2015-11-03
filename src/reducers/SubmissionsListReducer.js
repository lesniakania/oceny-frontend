import ActionTypes from '../constants/ActionTypes';
import SubmissionReducer from './SubmissionReducer'

let SubmissionsListReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
  case ActionTypes.RECEIVE_SUBMISSIONS_LIST:
    newState = {};
    action.submissions.forEach((s) => {
      newState[s.id] = s;
    });
    return newState;
  case ActionTypes.RECEIVE_SUBMISSION:
  case ActionTypes.RATING_PERFORMED:
    let submissionId = action.submission.id
    newState = {
      [submissionId]: SubmissionReducer(state[submissionId], action)
    };
    return Object.assign({}, state, newState);
  default:
    return state;
  }
};

export default SubmissionsListReducer;
