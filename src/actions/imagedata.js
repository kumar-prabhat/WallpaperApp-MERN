import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_IMAGES,
  IMAGE_ERROR,
  REMOVE_FAVOURITE,
  ADD_FAVOURITE,
  GET_FAVOURITE,
} from '../actions/types';

//Get images
export const getImages = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/imagedata');
    dispatch({
      type: GET_IMAGES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

//Get favourite images
export const getFavourites = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/imagedata/favourite');
    dispatch({
      type: GET_FAVOURITE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

//Add favourite images
export const addFavourites = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/imagedata/favourite/${id}`);
    dispatch({
      type: ADD_FAVOURITE,
      payload: res.data,
    });
    dispatch(setAlert('Added to favourite', 'success'));
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

//Remove favourite images
export const removeFavourites = (id) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/imagedata/favourite/remove/${id}`);
    dispatch({
      type: REMOVE_FAVOURITE,
      payload: res.data,
    });
    dispatch(setAlert('Removed from favourite', 'success'));
  } catch (err) {
    dispatch({
      type: IMAGE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
