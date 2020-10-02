import * as actionTypes from './actionTypes';

export const addPost = (title, body) => {
  return {
    type: actionTypes.ADD_POST,
    title: title,
    body: body
  };
};

export const deletePost = (id) => {
  return {
    type: actionTypes.DELETE_POST,
    id: id
  };
};