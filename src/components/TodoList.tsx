import { FC } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"

const TodoList: FC = () => {
    const { todos, loading, error } = useTypedSelector((state) => state.Todo)

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
        <ul className='todo-list'>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <strong>{todo.title}</strong>
                    <input type='checkbox' defaultChecked={todo.completed} />
                </li>
            ))}
        </ul>
    )
}

export { TodoList }
