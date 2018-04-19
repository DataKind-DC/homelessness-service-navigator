import * as Actions from "./actions";

const initialState = {
  services: null,
  error: null,
  isFetching: false
};

export function services(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.data,
        isFetching: false,
        error: null
      };

    case Actions.GET_SERVICES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };

    case Actions.GET_SERVICES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    default:
      return state;
  }
}

export default services;
