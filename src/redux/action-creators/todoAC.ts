import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes } from "../../types/todoTypes"

const apiURL = "https://jsonplaceholder.typicode.com/todos"

const fetchUsers =
    (page: number, limit: number) => async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS })
            const urlWithParams =
                apiURL + "?" + "_page=" + page + "&" + "_limit=" + limit
            const fetchedData = await fetch(urlWithParams)
            const todos = await fetchedData.json()
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_SUCCESS,
                payload: todos,
            })
        } catch (error) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: "Произошла ошибка при загрузке списка задач 👻",
            })
        }
    }

const setTodosPage = (page: number): TodoAction => ({
    type: TodoActionTypes.SET_TODOS_PAGE,
    payload: page,
})

export { fetchUsers, setTodosPage }
