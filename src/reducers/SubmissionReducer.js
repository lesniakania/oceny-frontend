import ActionTypes from '../constants/ActionTypes';

let SubmissionReducer = (state = {}, action) => {
  switch (action.type) {
  case ActionTypes.RECEIVE_SUBMISSION:
    return action.submission;
  case ActionTypes.PERFORM_RATING:
    return Object.assign({}, state, { rate: action.rate });
  default:
    return state;
  }
};

export default SubmissionReducer;
