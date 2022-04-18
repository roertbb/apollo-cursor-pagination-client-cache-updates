import { Route, Routes } from "react-router";
import { TodoDetails } from "./TodoDetails";
import { TodoListing } from "./TodoListing";
import { TodoNew } from "./TodoNew";

export function Todos() {
  return (
    <Routes>
      <Route path="/" element={<TodoListing />} />
      <Route path="/new" element={<TodoNew />} />
      <Route path="/:id" element={<TodoDetails />} />
    </Routes>
  );
}
