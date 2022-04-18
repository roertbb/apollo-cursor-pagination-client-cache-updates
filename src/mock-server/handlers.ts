import { graphql } from "msw";
import { v4 as uuid } from "uuid";

let todos = new Array(15).fill(undefined).map((_, idx) => ({
  __typename: "Todo",
  id: uuid(),
  name: `todo ${idx + 1}`,
  description: `some description ${idx + 1}`,
  completed: false,
}));

export const handlers = [
  graphql.query("TodosBatch", (req, res, ctx) => {
    const { limit = 5, cursor } = req.body?.variables;

    const startAt = cursor ? todos.findIndex(({ id }) => id === cursor) : 0;
    const nextIndex = startAt + limit;
    const nextCursor = nextIndex < todos.length ? todos[nextIndex].id : null;

    return res(
      ctx.data({
        todosBatch: {
          todos: todos.slice(startAt, startAt + limit),
          cursor: nextCursor,
        },
      })
    );
  }),
  graphql.query("getTodo", (req, res, ctx) => {
    const { id } = req.body?.variables;

    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      return res(ctx.errors([{ message: "Item not found" }]));
    }

    return res(
      ctx.data({
        todo,
      })
    );
  }),
  graphql.mutation("CreateTodo", (req, res, ctx) => {
    const { input } = req.body?.variables;

    const newTodo = { __typename: "Todo", id: uuid(), ...input };
    todos = [newTodo, ...todos];

    return res(
      ctx.data({
        createTodo: newTodo,
      })
    );
  }),
  graphql.mutation("DeleteTodo", (req, res, ctx) => {
    const { id } = req.body?.variables;
    const removedTodo = todos.find((todo) => todo.id === id);

    if (!removedTodo) {
      return res(ctx.errors([{ message: "Item not found" }]));
    }

    todos = todos.filter((todo) => todo.id !== removedTodo.id);

    return res(
      ctx.data({
        deleteTodo: true,
      })
    );
  }),
  graphql.mutation("UpdateTodo", (req, res, ctx) => {
    const { input } = req.body?.variables;
    const todoIndex = todos.findIndex(({ id }) => id === input.id);

    if (todoIndex === -1) {
      return res(ctx.errors([{ message: "Item not found" }]));
    }

    const updatedTodo = { ...todos[todoIndex], ...input };
    todos[todoIndex] = updatedTodo;

    return res(ctx.data({ updateTodo: updatedTodo }));
  }),
];
