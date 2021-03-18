import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";
//typeahead
import { Typeahead } from "react-bootstrap-typeahead";
// import ReactDOM from "react-dom";
import options from "./data";
// import "react-bootstrap-typeahead/css/Typeahead.css";

export default function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);

  const handleInputChange = (event) => {
    return setInput(event.target.value);
  };

  const handleSubmit = () => {
    // if (input !== "") {
    dispatch(actionCreators.addToList(selected[0].label));

    console.log(selected[0].label);

    setInput("");
    // } else {
    // }
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <div>
      {/* <input
        type="text"
        className="input"
        placeholder="Add product..."
        value={input}
        onChange={handleInputChange}
        autoComplete="off"
      /> */}
      <Typeahead
        id="basic-example"
        placeholder="Choose a state..."
        selected={selected}
        onChange={setSelected}
        // value={input}
        // onChange={handleInputChange}
        options={options}
      />
      <Button className="button" variant="outline-dark" onClick={handleSubmit}>
        Add
      </Button>
      <Button className="button" variant="outline-dark" onClick={handleClear}>
        Clear
      </Button>
      {/* <p>Writen by {selected[0].label}</p> */}
    </div>
  );
}
