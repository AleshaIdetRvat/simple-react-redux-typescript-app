import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"

const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export { reduxStore }
