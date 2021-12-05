import { combineReducers } from "redux"
import { userReducer } from "./userReducer"

const rootReducer = combineReducers({ User: userReducer })
type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
export type { RootState }
