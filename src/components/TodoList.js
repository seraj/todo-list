import React, { useContext, useEffect } from "react";
import classNames from "classnames/bind";
import Store from "../store/context";
import { TodoHeader } from "./TodoHeader";
import { EditIcon } from "./icons";
export default function TodoList() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    return () => {
      dispatch({ type: "EDIT", payload: {} });
    };
  }, []);
  const counter = (count) =>
    count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`;

  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12 p-2">
            {state?.todos?.length === 0 ? (
              <p className="text-center">
                <h4>You have nothing to do</h4>
                <h4>go get some Sleep</h4>
              </p>
            ) : (
              <TodoHeader>
                <div className="text-end">{counter(state?.todos?.length)}</div>
              </TodoHeader>
            )}
          </div>
        </div>
        <div className="row g-2">
          {state?.todos?.map((todo) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div key={todo.id} className="card">
                <div class="card-body">
                  <h5 class="card-title">{todo.title}</h5>
                  <p class="card-text">{todo.desc}</p>
                  <button
                    className={classNames("btn", {
                      "btn-success": todo?.state === "deployed",
                      "btn-primary": todo?.state !== "deployed",
                    })}
                    onClick={() => {
                      if (todo?.state === "deployed") {
                        dispatch({ type: "COMPLETE", payload: todo });
                      }
                    }}
                  >
                    {todo?.state}
                  </button>
                  <span
                    onClick={() => dispatch({ type: "EDIT", payload: todo })}
                    className="float-end"
                  >
                    <EditIcon width={40} height={40} color="#000" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
