import { useDeleteTodoMutation } from "~/graphql/generatedTypes";

export function useDeleteTodo() {
  const [deleteTodo] = useDeleteTodoMutation({
    update(cache, { data }, { variables }) {
      if (data?.deleteTodo && variables?.id) {
        // remove referece to item from queries in cache
        cache.modify({
          fields: {
            // remove the reference from removed item from the list
            todosBatch: (existing) => {
              const { [variables.id]: _, ...remainingTodos } = existing.todos;
              return {
                cursor: existing.cursor,
                todos: remainingTodos,
              };
            },
            todo: (existing, { DELETE, readField }) => {
              // if single Todo with given id was selected to fetch its details - mark it as removed
              if (readField("id", existing) === variables.id) {
                return DELETE;
              }
              return existing;
            },
          },
        });

        // garbage collector - remove all objects that are not referenced from any query - in that case - removed Todo
        cache.gc();
      }
    },
  });

  return { deleteTodo };
}
