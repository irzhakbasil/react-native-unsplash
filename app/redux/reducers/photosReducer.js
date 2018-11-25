import { FETCH_PHOTOS, FETCH_PHOTOS_ERROR, PHOTO_SELECTED, SERCH_TERM_UPDATE, PHOTO_DESELECTED} from "../actions/types";

const initialState = {
  data: null,
  error: null,
  photoSelected: false,
  selectedObj: null,
  searchTerm: "pussy",
};

const photosReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_PHOTOS:
      return { ...state, data: action.payload, error: null};
    case FETCH_PHOTOS_ERROR:
      return { ...state, error: action.payload };
      case PHOTO_SELECTED: 
      return {...state, photoSelected: true, selectedObj:action.payload};
      case SERCH_TERM_UPDATE: 
      return { ...state, searchTerm: action.payload};
      case PHOTO_DESELECTED: {
        return { ...state, photoSelected: false, selectedObj: null}
      }
    default:
      return state;
  }
};

export default photosReducer;
