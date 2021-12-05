import { Dispatch } from "redux"
import { UserActionTypes, IUserAction } from "../../types/userTypes"

const apiURL = "https://jsonplaceholder.typicode.com/users"

const fetchUsers = () => async (dispatch: Dispatch<IUserAction>) => {
    try {
        dispatch({ type: UserActionTypes.FETCH_USERS })
        const fetchedData = await fetch(apiURL)
        const users = await fetchedData.json()
        dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: users })
        //
    } catch (error) {
        dispatch({
            type: UserActionTypes.FETCH_USERS_ERROR,
            payload: "Произошла ошибка при загрузке пользователей 👻",
        })
    }
}

export { fetchUsers }
