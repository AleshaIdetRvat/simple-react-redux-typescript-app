import { IState } from "./mainTypes"

enum UserActionTypes {
    FETCH_USERS = "user/FETCH_USERS",
    FETCH_USERS_SUCCESS = "user/FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "user/FETCH_USERS_ERROR",
}

interface IUserItem {
    id: number
    name: string
    email: string
}

interface IUserState extends IState {
    users: IUserItem[]
}

// Интерфейс для каждого конкретного action'а
interface IFetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface IFetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: IUserItem[]
}
interface IFetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}
// "Общий" тип для action'а
type IUserAction =
    | IFetchUsersAction
    | IFetchUsersErrorAction
    | IFetchUsersSuccessAction

export { UserActionTypes }
export type { IUserAction, IUserState }
