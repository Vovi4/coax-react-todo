import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";

// import saga from "./sagas/rootSaga";
import sagaWatcher from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
	applyMiddleware( saga ),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

export default store;