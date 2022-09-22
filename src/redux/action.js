import * as types from "./actionTypes";

import axios from "axios";

const getHotelReq = () => {
  return {
    type: types.GET_HOTELS_REQ,
  };
};

const getHotelSuccess = (payload) => {
  return {
    type: types.GET_HOTELS_SUCCESS,
    payload,
  };
};

const getHotelFail = () => {
  return {
    type: types.GET_HOTELS_FAIL,
  };
};

//update

const updateHotelReq = () => {
  return {
    type: types.UPDATE_HOTELS_REQ,
  };
};

const updateHotelSuccess = (payload) => {
  return {
    type: types.UPDATE_HOTELS_SUCCESS,
    payload,
  };
};

const updateHotelFail = () => {
  return {
    type: types.UPDATE_HOTELS_FAIL,
  };
};

//delete

const delHotelReq = () => {
  return {
    type: types.DELETE_HOTELS_REQ,
  };
};

const delHotelSuccess = (payload) => {
  return {
    type: types.DELETE_HOTELS_SUCCESS,
    payload,
  };
};

const delHotelFail = () => {
  return {
    type: types.DELETE_HOTELS_FAIL,
  };
};

export const getData = (params) => {
  return (dispatch) => {
    dispatch(getHotelReq());
    axios
      .get("https://ancient-caverns-16282.herokuapp.com/hotel", params)
      .then((res) => dispatch(getHotelSuccess(res.data)))
      .catch((e) => dispatch(getHotelFail()));
  };
};

//for update

export const getEditData = (id, params) => {
  return (dispatch) => {
    dispatch(updateHotelReq());
    axios
      .patch(`https://ancient-caverns-16282.herokuapp.com/hotel/${id}`, params)
      .then((res) => dispatch(updateHotelSuccess(res.data)))
      .catch((e) => dispatch(updateHotelFail()));
  };
};
