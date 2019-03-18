export const ActionCreatorHelper = {
  requestedDashboard: () => {
    return {type: "REQUESTED_DASHBOARD"};
  },

  requestedDashboardSuccess: (data) => {
    return {type: "REQUESTED_DASHBOARD_SUCCEEDED", data};
  },

  requestedDashboardError: () => {
    return {type: "REQUESTED_DASHBOARD_FAILED"};
  },

  fetchDashboard: (infoDate) => {
    return {type: "FETCH_DASHBOARD_ASYNC", infoDate};
  }
};