import React from "react";

const Store = React.createContext({
  todos: [],
  input: "INPUT_ADD",
  query: "",
  filter: "all"
});

export default Store;
