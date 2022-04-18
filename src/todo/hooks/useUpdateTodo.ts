import { useUpdateTodoMutation } from "~/graphql/generatedTypes";

export function useUpdateTodo() {
  /**
   * we don't need to do anything else here, because
   * updateTodo mutation returns the updated Todo
   * the entity which is goind to be updated, that has 'id'
   * apollo will use id to look it up in the cache and update
   * fields of proper Todo automatically
   * assuming - you're doing the update and returning all the updated fields
   */
  const [updateTodo] = useUpdateTodoMutation();

  return { updateTodo };
}
