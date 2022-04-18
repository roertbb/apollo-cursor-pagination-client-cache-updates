import { useGetTodoQuery } from "~/graphql/generatedTypes";

export function useGetTodo({ id }: { id: string }) {
  const { data, loading, error } = useGetTodoQuery({
    variables: { id },
  });

  return { data, loading, error };
}
