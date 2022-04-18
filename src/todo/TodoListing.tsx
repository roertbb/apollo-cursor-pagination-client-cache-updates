import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDeleteTodo } from "./hooks/useDeleteTodo";
import { useGetTodos } from "./hooks/useGetTodos";
import { useUpdateTodo } from "./hooks/useUpdateTodo";
import styles from "./TodoListing.module.css";

export function TodoListing() {
  const navigate = useNavigate();

  const { todos, loading, error, loadMore, hasMore } = useGetTodos();
  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();

  function handleChangeTodoCompletion(id: string, value: boolean) {
    updateTodo({ variables: { input: { id, completed: value } } });
  }

  function handleDeleteTodo(id: string) {
    deleteTodo({ variables: { id } });
  }

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>failed to load todos</p>;
  }

  return (
    <>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <input
              type="checkbox"
              value={todo.id}
              checked={todo.completed}
              onChange={() =>
                handleChangeTodoCompletion(todo.id, !todo.completed)
              }
            />
            <Link to={`/${todo.id}`}>{todo.name}</Link>
            <button onClick={() => handleDeleteTodo(todo.id)}>x</button>
          </li>
        ))}
      </ul>
      <button onClick={loadMore} disabled={hasMore}>
        load more
      </button>
      <button onClick={() => navigate("/new")}>create todo</button>
    </>
  );
}
