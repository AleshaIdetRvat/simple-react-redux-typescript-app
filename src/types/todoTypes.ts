import { IState } from "./mainTypes"

enum TodoActionTypes {
    FETCH_TODOS = "user/FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "user/FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "user/FETCH_TODOS_ERROR",
}

interface ITodoItem {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface ITodoState extends IState {
    todos: ITodoItem[]
}
// actions types

interface IFetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface IFetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}
interface IFetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: ITodoItem[]
}

type TodoAction =
    | IFetchTodosAction
    | IFetchTodosErrorAction
    | IFetchTodosSuccessAction

export { TodoActionTypes }
export type { ITodoState, TodoAction }
