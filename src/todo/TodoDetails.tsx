import { useLocation, useNavigate } from "react-router";
import { useGetTodo } from "./hooks/useGetTodo";
import { useUpdateTodo } from "./hooks/useUpdateTodo";

export function TodoDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const todoId = location.pathname.split("/").at(-1) ?? "";

  const { data, loading, error } = useGetTodo({ id: todoId });
  const { updateTodo } = useUpdateTodo();

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>failed to load todo</p>;
  }

  function handleChangeTodoCompletion() {
    if (data) {
      updateTodo({
        variables: {
          input: {
            id: todoId,
            completed: !data?.todo.completed,
          },
        },
      });
    }
  }

  return (
    <div>
      <p>id: {data?.todo.id}</p>
      <p>name: {data?.todo.name}</p>
      <p>description: {data?.todo.description}</p>
      <p>
        <span>completed: </span>
        <input
          type="checkbox"
          checked={data?.todo.completed}
          onChange={() => handleChangeTodoCompletion()}
        />
      </p>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
}
