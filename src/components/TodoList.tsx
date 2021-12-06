import { FC, useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const TodoList: FC = () => {
    const { todos, page, limit, loading, error } = useTypedSelector(
        (state) => state.Todo
    )

    const { fetchTodos, setTodosPage } = useActions()

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page, limit])

    const pagesSelectorOptions = [1, 2, 3, 4, 5]

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const handlePagination = (event: React.MouseEvent<HTMLDivElement>) => {
        const element = event.target as HTMLButtonElement
        if (element.tagName === "BUTTON") {
            setTodosPage(+element.value)
        }
    }

    return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <strong>{todo.title}</strong>
                    <input type='checkbox' defaultChecked={todo.completed} />
                </li>
            ))}
            <div className='pagination' onClick={handlePagination}>
                {pagesSelectorOptions.map((num) => (
                    <button
                        key={num}
                        value={num}
                        style={{
                            borderColor: num === page ? "tomato" : "whitesmoke",
                            padding: "5px 10px",
                        }}
                    >
                        {num}
                    </button>
                ))}
            </div>
        </ul>
    )
}

export { TodoList }
