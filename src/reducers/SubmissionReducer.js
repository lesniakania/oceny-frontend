import ActionTypes from '../constants/ActionTypes';

let SubmissionReducer = (state = {}, action) => {
  switch (action.type) {
  case ActionTypes.RECEIVE_SUBMISSION:
  case ActionTypes.RATING_PERFORMED:
    return action.submission;
  default:
    return state;
  }
};

export default SubmissionReducer;
