import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BatchInput = {
  cursor?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTodo: Todo;
  deleteTodo: Scalars["Boolean"];
  updateTodo: Todo;
};

export type MutationCreateTodoArgs = {
  input: TodoCreateInput;
};

export type MutationDeleteTodoArgs = {
  id: Scalars["String"];
};

export type MutationUpdateTodoArgs = {
  input: TodoUpdateInput;
};

export type Query = {
  __typename?: "Query";
  todo: Todo;
  todosBatch: TodoResults;
};

export type QueryTodoArgs = {
  id: Scalars["String"];
};

export type QueryTodosBatchArgs = {
  input: BatchInput;
};

export type Todo = {
  __typename?: "Todo";
  completed: Scalars["Boolean"];
  description: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
};

export type TodoCreateInput = {
  completed?: InputMaybe<Scalars["Boolean"]>;
  description: Scalars["String"];
  name: Scalars["String"];
};

export type TodoResults = {
  __typename?: "TodoResults";
  cursor?: Maybe<Scalars["String"]>;
  todos: Array<Todo>;
};

export type TodoUpdateInput = {
  completed: Scalars["Boolean"];
  id: Scalars["String"];
};

export type CreateTodoMutationVariables = Exact<{
  input: TodoCreateInput;
}>;

export type CreateTodoMutation = {
  __typename?: "Mutation";
  createTodo: {
    __typename?: "Todo";
    id: string;
    name: string;
    description: string;
    completed: boolean;
  };
};

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteTodoMutation = {
  __typename?: "Mutation";
  deleteTodo: boolean;
};

export type GetTodoQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetTodoQuery = {
  __typename?: "Query";
  todo: {
    __typename?: "Todo";
    id: string;
    name: string;
    description: string;
    completed: boolean;
  };
};

export type TodosBatchQueryVariables = Exact<{
  limit: Scalars["Int"];
  cursor?: InputMaybe<Scalars["String"]>;
}>;

export type TodosBatchQuery = {
  __typename?: "Query";
  todosBatch: {
    __typename?: "TodoResults";
    cursor?: string | null;
    todos: Array<{
      __typename?: "Todo";
      id: string;
      name: string;
      completed: boolean;
    }>;
  };
};

export type UpdateTodoMutationVariables = Exact<{
  input: TodoUpdateInput;
}>;

export type UpdateTodoMutation = {
  __typename?: "Mutation";
  updateTodo: {
    __typename?: "Todo";
    id: string;
    name: string;
    completed: boolean;
  };
};

export const CreateTodoDocument = gql`
  mutation CreateTodo($input: TodoCreateInput!) {
    createTodo(input: $input) {
      id
      name
      description
      completed
    }
  }
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument,
    options
  );
}
export type CreateTodoMutationHookResult = ReturnType<
  typeof useCreateTodoMutation
>;
export type CreateTodoMutationResult =
  Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id)
  }
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    options
  );
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult =
  Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;
export const GetTodoDocument = gql`
  query getTodo($id: String!) {
    todo(id: $id) {
      id
      name
      description
      completed
    }
  }
`;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTodoQuery(
  baseOptions: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(
    GetTodoDocument,
    options
  );
}
export function useGetTodoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(
    GetTodoDocument,
    options
  );
}
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<
  GetTodoQuery,
  GetTodoQueryVariables
>;
export const TodosBatchDocument = gql`
  query TodosBatch($limit: Int!, $cursor: String) {
    todosBatch(input: { limit: $limit, cursor: $cursor }) {
      todos {
        id
        name
        completed
      }
      cursor
    }
  }
`;

/**
 * __useTodosBatchQuery__
 *
 * To run a query within a React component, call `useTodosBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosBatchQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useTodosBatchQuery(
  baseOptions: Apollo.QueryHookOptions<
    TodosBatchQuery,
    TodosBatchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodosBatchQuery, TodosBatchQueryVariables>(
    TodosBatchDocument,
    options
  );
}
export function useTodosBatchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TodosBatchQuery,
    TodosBatchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodosBatchQuery, TodosBatchQueryVariables>(
    TodosBatchDocument,
    options
  );
}
export type TodosBatchQueryHookResult = ReturnType<typeof useTodosBatchQuery>;
export type TodosBatchLazyQueryHookResult = ReturnType<
  typeof useTodosBatchLazyQuery
>;
export type TodosBatchQueryResult = Apollo.QueryResult<
  TodosBatchQuery,
  TodosBatchQueryVariables
>;
export const UpdateTodoDocument = gql`
  mutation UpdateTodo($input: TodoUpdateInput!) {
    updateTodo(input: $input) {
      id
      name
      completed
    }
  }
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTodoMutation,
    UpdateTodoMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    UpdateTodoDocument,
    options
  );
}
export type UpdateTodoMutationHookResult = ReturnType<
  typeof useUpdateTodoMutation
>;
export type UpdateTodoMutationResult =
  Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<
  UpdateTodoMutation,
  UpdateTodoMutationVariables
>;
