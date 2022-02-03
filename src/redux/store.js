import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// import saga from "./sagas/rootSaga";
import sagaWatcher from "./sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
		applyMiddleware( saga )
	)
)

saga.run(sagaWatcher)

export default store;