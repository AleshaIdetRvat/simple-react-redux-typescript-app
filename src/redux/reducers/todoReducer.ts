import { ITodoState, TodoActionTypes, TodoAction } from "../../types/todoTypes"

const initialState: ITodoState = {
    todos: [],
    error: null,
    loading: false,
}

const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return { ...state, loading: true }
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return { ...state, loading: false, todos: action.payload }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}

export { todoReducer }
