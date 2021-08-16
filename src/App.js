import React, { useContext, useReducer } from "react";
import Store from "./store/context";
import reducer from "./store/reducer";
import { usePersistedContext, usePersistedReducer } from "./store/usePersist";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const globalStore = usePersistedContext(useContext(Store), "state");
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );
  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
    </Store.Provider>
  );
}

export default App;
