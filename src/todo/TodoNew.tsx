import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateTodo } from "./hooks/useCreateTodo";

export function TodoNew() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigate = useNavigate();

  const { createTodo } = useCreateTodo();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await createTodo({
      variables: { input: { name, description, completed } },
      onCompleted: () => navigate("/"),
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="completed">completed:</label>
        <input
          id="completed"
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted((value) => !value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
  );
}
