import {put, call, takeEvery} from "redux-saga/effects";
import {delay} from "redux-saga";
import {ActionCreatorHelper} from "../action-creators/action-creator-helper";
import {QueryHelper} from "./../query/query-helper";

function * fetchDashboardAsync ({infoDate}) {
  try {
    const dashboardData = yield call(() => QueryHelper.getDashboard(infoDate));
    yield put(ActionCreatorHelper.requestedDashboardSuccess(dashboardData));
  } catch (error) {
    yield put(ActionCreatorHelper.requestedDashboardError());
  }
}

export default function * rootSaga () {
  yield takeEvery("FETCH_DASHBOARD_ASYNC", fetchDashboardAsync);
}
