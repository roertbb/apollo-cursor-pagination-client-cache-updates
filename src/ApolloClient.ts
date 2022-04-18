import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  Reference,
} from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todosBatch: {
          keyArgs: false,
          merge(
            existing:
              | {
                  cursor: string | null;
                  todos: Record<string, Reference>;
                }
              | undefined,
            incoming: {
              cursor: string | null;
              todos: Reference[];
            },
            { readField }
          ) {
            const todos = { ...existing?.todos };
            // merge the incoming Todos into a map with previously fetched todos
            // using the id field as a key for the map
            incoming.todos.forEach((todo) => {
              const id = readField<string>("id", todo);
              if (id) {
                todos[id] = todo;
              }
            });
            return {
              cursor: incoming.cursor,
              todos,
            };
          },
          // transform the map of todos into an array
          read(existing: {
            cursor: string | null;
            todos: Record<string, Reference>;
          }) {
            if (existing) {
              return {
                cursor: existing.cursor,
                todos: Object.values(existing.todos),
              };
            }
          },
        },
      },
    },
  },
});

const link = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

export const client = new ApolloClient({
  cache,
  link,
});
