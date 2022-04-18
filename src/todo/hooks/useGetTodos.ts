import { useTodosBatchQuery } from "~/graphql/generatedTypes";

export function useGetTodos() {
  const { data, loading, error, fetchMore } = useTodosBatchQuery({
    variables: {
      limit: 5,
    },
  });

  function loadMore() {
    fetchMore({
      variables: {
        limit: 5,
        cursor: data?.todosBatch.cursor,
      },
    });
  }

  return {
    todos: data?.todosBatch.todos,
    hasMore: data?.todosBatch.cursor === null,
    loadMore,
    loading,
    error,
  };
}
