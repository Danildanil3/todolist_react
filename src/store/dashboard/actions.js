import { getListsAx } from "../../axios/axios";

export const DASHBOARD_LOADED = "dashboard/loaded";

export const loadDashboard = (dispatch) => {
  getListsAx().then((dashboard) =>
    dispatch({
      type: DASHBOARD_LOADED,
      payload: dashboard,
    })
  );
};
