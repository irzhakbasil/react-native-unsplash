import { FETCH_PHOTOS, FETCH_PHOTOS_ERROR } from "../actions/types";

const initialState = {
  data: null,
  error: null
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return { ...state, data: action.payload, error: null };
    case FETCH_PHOTOS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default photosReducer;
