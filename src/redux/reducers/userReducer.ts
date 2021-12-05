import { IUserAction, UserActionTypes, IUserState } from "../../types/userTypes"

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null,
}

// (+) Вариант с Дженериком
//  const userReducer = <T extends { type: string; payload?: any }>(
//      state = initialState,
//      action: T
//  ): IUserState => {...

const userReducer = (state = initialState, action: IUserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }

        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }

        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export { userReducer }
