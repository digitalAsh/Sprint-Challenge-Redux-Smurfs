/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://localhost:3333/smurfs/")
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const ADD_START = 'ADD_START';
export const ADD_SMURF = 'ADD_SMURF';

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_START });

  return axios 
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF, payload: res.data})
    })
    .catch(err => console.log(err));
  
}

// export const ADD_SMURF = 'ADD_SMURF';

// export const addSmurf = smurf => {
//   return {
//     type: ADD_SMURF,
//     payload: smurf
//   };
// }
export const TOGGLE_SMURF = 'TOGGLE_SMURF'

export function toggleSmurf(index) {
  return {
    type: TOGGLE_SMURF,
    payload: index
  }
}

export const DELETE_SMURF = 'DELETE_SMURF'

export function deleteSmurf() {
  return {
    type: DELETE_SMURF
  }
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
