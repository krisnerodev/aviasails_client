import {render} from "react-dom";
import Routes from "./components/routes";
import React from "react";

import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";
import {Provider} from "react-redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const renderApp = () => render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById("app")
);

renderApp();
