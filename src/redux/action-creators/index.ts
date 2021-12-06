import * as UserAC from "./userAC"
import * as TodoAC from "./todoAC"

const ActionCreators = { ...UserAC, ...TodoAC }

export { ActionCreators }
