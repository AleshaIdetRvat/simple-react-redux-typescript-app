import { FC, useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const UserList: FC = () => {
    const { users, error, loading } = useTypedSelector((state) => state.User)
    // (!) Вместо этого --> const dispatch = useDispatch()
    //     используем кастомный хук

    const { fetchUsers } = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='user-list'>
            {users.map((user) => (
                <h3 key={user.id}>{user.email}</h3>
            ))}
        </div>
    )
}

export { UserList }
