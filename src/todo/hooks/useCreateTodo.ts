import { useCreateTodoMutation } from "~/graphql/generatedTypes";

export function useCreateTodo() {
  const [createTodo] = useCreateTodoMutation({
    update(cache, { data }) {
      if (data?.createTodo) {
        cache.modify({
          fields: {
            todosBatch: (existing, { toReference }) => ({
              cursor: existing.cursor,
              todos: {
                [data.createTodo.id]: toReference(data.createTodo),
                ...existing.todos,
              },
            }),
          },
        });
      }
    },
  });

  return { createTodo };
}
