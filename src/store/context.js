import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  editTask: {},
  todos: [
    // Initial Data
    {
      title: "task 1",
      desc: "Some quick example text",
      state: "todo",
      id: "1",
    },
    {
      title: "task 2",
      desc: "Some quick example text",
      state: "inprogress",
      id: "2",
    },
    {
      title: "task 3",
      desc: "Some quick example text",
      state: "inQA",
      id: "3",
    },
    {
      title: "task 4",
      desc: "Some quick example text",
      state: "blocked",
      id: "4",
    },
    {
      title: "task 5",
      desc: "Some quick example text",
      state: "done",
      id: "5",
    },
    {
      title: "task 6",
      desc: "Some quick example text",
      state: "deployed",
      id: "6",
    },
  ],
});

export default Store;
