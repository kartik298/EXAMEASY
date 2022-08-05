import {
  TEST_SELECTED,
  SELECTED_TEST_RESULT,
  SELECTED_ASSIGNED_TEST,
} from "../actions/selectActions";

const initialState = {
  selectedTestData: {},
  selectedTestResultData: {},
  selectedAssignedTestData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST_SELECTED:
      return {
        ...state,
        selectedTestData: action.testData,
      };

    case SELECTED_TEST_RESULT:
      return {
        ...state,
        selectedTestResultData: action.testData,
      };
    case SELECTED_ASSIGNED_TEST:
      return {
        ...state,
        selectedAssignedTestData: action.testData,
      };

    default:
      return state;
  }
}
