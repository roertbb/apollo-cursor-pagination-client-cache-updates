import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { client } from "./ApolloClient";
import { worker } from "./mock-server/browser";
import { Todos } from "./todo";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Todos />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
