import {
  FETCH_CLASSES_REQUEST,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
} from "../actions/classesActions";

const initialState = {
  isLoading: false,
  isFetched: false,
  isFetchError: false,
  classes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CLASSES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetched: true,
        classes: action.data,
      };

    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        isfetched: false,
        isLoading: true,
      };

    default:
      return state;
  }
}
