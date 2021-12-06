import { combineReducers } from "redux"
import { todoReducer } from "./todoReducer"
import { userReducer } from "./userReducer"

const rootReducer = combineReducers({ User: userReducer, Todo: todoReducer })
type RootState = ReturnType<typeof rootReducer>

export type { RootState }
export { rootReducer }
