import _ from "lodash";

const initialState = {
  data: {},
  loading: false,
  dataFetchError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTED_DASHBOARD":
      return {
        data: {},
        loading: true,
        dataFetchError: false
      };
    case "REQUESTED_DASHBOARD_SUCCEEDED":
      return {
        data: _.get(action, "data.data"),
        loading: false,
        dataFetchError: false
      };
    case "REQUESTED_DASHBOARD_FAILED":
      return {
        data: {},
        loading: false,
        dataFetchError: true
      };
    default:
      return state;
  }
};