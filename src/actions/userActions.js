import {UPDATE_USER} from './actionTypes';

const updateUser = (userdata) => {
  return {
    type: UPDATE_USER,
    userdata: userdata,
  };
};

export {updateUser};
