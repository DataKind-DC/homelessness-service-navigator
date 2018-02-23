import fetch from "node-fetch";

// Example of calls to server for information
//localhost:8000/api/services/:id
//id, name, url

export const GET_SERVICES = "GET_SERVICES";
export const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST";
export const GET_SERVICES_SUCCESS = "GET_SERVICES_SUCCESS";
export const GET_SERVICES_FAILURE = "GET_SERVICES_FAILURE";

export function getServices() {
  return dispatch => {
    dispatch(getServicesRequest());
    fetch("http://localhost:3000/api/services")
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(json => dispatch(getServicesSuccess(json)))
      .catch(error => dispatch(getServicesFailure(error)));
  };
}

export function getServicesRequest() {
  return {
    type: GET_SERVICES_REQUEST
  };
}

export function getServicesSuccess(data) {
  return {
    type: GET_SERVICES_SUCCESS,
    data
  };
}

export function getServicesFailure(error) {
  return {
    type: GET_SERVICES_FAILURE,
    error
  };
}
