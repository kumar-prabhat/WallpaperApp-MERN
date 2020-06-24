import {
  GET_IMAGES,
  IMAGE_ERROR,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  GET_FAVOURITE,
} from '../actions/types';

const initialState = {
  images: [],
  image: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_IMAGES:
    case GET_FAVOURITE:
      return {
        ...state,
        images: payload,
        loading: false,
      };
    case REMOVE_FAVOURITE:
    case ADD_FAVOURITE:
      return {
        ...state,
        image: payload,
        loading: false,
      };
    case IMAGE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
