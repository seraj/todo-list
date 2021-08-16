import React, { useContext, useEffect, useState } from "react";
import uuid from "react-uuid";
import Store from "../store/context";
import { EditIcon, AddIcon } from "./icons";

const todoObj = {
  name: "ToDo",
  value: "todo",
};
const inPrObj = {
  name: "inProgress",
  value: "inprogress",
};
const inQaObj = {
  name: "inQA",
  value: "inQA",
};
const blockedObj = {
  name: "Blocked",
  value: "blocked",
};
const doneObj = {
  name: "Done",
  value: "done",
};
const deployedObj = {
  name: "Deployed",
  value: "deployed",
};
const todoStates = {
  new: [todoObj],
  todo: [todoObj, inPrObj],
  inprogress: [inPrObj, inQaObj, blockedObj],
  inQA: [todoObj, inQaObj, doneObj],
  blocked: [todoObj, blockedObj],
  done: [doneObj, deployedObj],
  deployed: [deployedObj],
};
export default function TodoForm() {
  const { state, dispatch } = useContext(Store);
  const [formState, setFormState] = useState("new");
  const [states, setStates] = useState(todoStates);
  const [inputValues, setInputValues] = useState({
    title: "",
    desc: "",
    state: "",
  });

  useEffect(() => {
    if (state?.editTask?.title) {
      setFormState("edit");
      setInputValues({
        id: state.editTask?.id,
        title: state.editTask?.title,
        desc: state.editTask?.desc,
        state: state.editTask?.state,
      });
    } else {
      setFormState("new");
      setInputValues({ title: "", desc: "", state: "", id: "" });
    }
  }, [state]);
  function handleTodoAdd() {
    const inputs = {
      ...inputValues,
      id: uuid(),
    };
    if (formState === "new") {
      dispatch({ type: "ADD_TODO", payload: inputs });
    } else {
      dispatch({ type: "UPDATE_TODO", payload: inputValues });
    }
    setInputValues({ title: "", desc: "", state: "", id: "" });
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }
  const handleChangeValue = (value) => {
    setInputValues({ ...inputValues, ...value });
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <br />
        <div className="mb-3">
          <input
            className="form-control"
            value={inputValues.title}
            autoFocus={true}
            placeholder="todo title"
            onKeyUp={handleSubmitForm}
            onChange={(e) => handleChangeValue({ title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <textarea
            value={inputValues.desc}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="todo description"
            onKeyUp={handleSubmitForm}
            onChange={(e) => handleChangeValue({ desc: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="todo State"
            onChange={(e) => handleChangeValue({ state: e.target.value })}
            value={inputValues.state}
            onKeyUp={handleSubmitForm}
            placeholder="state"
          >
            <option selected>select state of the task</option>
            {formState === "new" ? (
              <>
                {states["new"]?.map((item) => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </>
            ) : (
              <>
                {states[state.editTask?.state]?.map((item) => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </>
            )}
          </select>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary w-100" onClick={handleTodoAdd}>
              {formState === "new" ? (
                <>
                  <AddIcon /> Add
                </>
              ) : (
                <>
                  <EditIcon /> Edit
                </>
              )}
            </button>
          </div>
          {formState === "edit" && (
            <div className="col">
              <button
                className="btn btn-secondary w-100"
                onClick={() => dispatch({ type: "CANCEL_UPDATE", payload: {} })}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
