import { IState } from "./mainTypes"

enum TodoActionTypes {
    FETCH_TODOS = "todo/FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "todo/FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "todo/FETCH_TODOS_ERROR",
    SET_TODOS_PAGE = "todo/SET_TODOS_PAGE",
}
interface ITodoItem {
    userId: number
    id: number
    title: string
    completed: boolean
}
interface ITodoState extends IState {
    todos: ITodoItem[]
    page: number
    limit: number
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
interface ISetTodosPage {
    type: TodoActionTypes.SET_TODOS_PAGE
    payload: number
}

type TodoAction =
    | IFetchTodosAction
    | IFetchTodosErrorAction
    | IFetchTodosSuccessAction
    | ISetTodosPage

export { TodoActionTypes }
export type { ITodoState, TodoAction }
