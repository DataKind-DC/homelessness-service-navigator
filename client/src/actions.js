import fetch from "node-fetch";

// Example of calls to server for information
//localhost:8000/api/services/:id
//id, name, url

export const GET_SERVICES = "GET_SERVICES";
export const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST";
export const GET_SERVICES_SUCCESS = "GET_SERVICES_SUCCESS";
export const GET_SERVICES_FAILURE = "GET_SERVICES_FAILURE";

export const GET_SERVICE = "GET_SERVICE";
export const GET_SERVICE_REQUEST = "GET_SERVICE_REQUEST";
export const GET_SERVICE_SUCCESS = "GET_SERVICE_SUCCESS";
export const GET_SERVICE_FAILURE = "GET_SERVICE_FAILURE";

export function getServices() {
  return dispatch => {
    dispatch(getServicesRequest());
    fetch("http://localhost:3000/api/services")
      .then(res => res.json())
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

export function getService(id) {
  return dispatch => {
    dispatch(getServiceRequest());
    fetch(`http://localhost:3000/api/services/${id}`)
      .then(res => res.json())
      .then(json => dispatch(getServiceSuccess(json)))
      .catch(error => dispatch(getServiceFailure(error)));
  };
}

export function getServiceRequest() {
  return {
    type: GET_SERVICE_REQUEST
  };
}

export function getServiceSuccess(data) {
  return {
    type: GET_SERVICE_SUCCESS,
    data
  };
}

export function getServiceFailure(error) {
  return {
    type: GET_SERVICE_FAILURE,
    error
  };
}
