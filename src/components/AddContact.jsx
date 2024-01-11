import React from "react";
import { useState } from "react";

const AddContactList = () => {
  const [state, setState] = useState({});

  const _state = {};

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" action="">
        <div className="field">
          <label htmlFor="">Name</label>
          <input
            name="name"
            placeholder="Name"
            type="text"
            onChange={(e) => {
              _state.name = e.target.value;

              setState(_state);
            }}
          />
        </div>

        <div className="field">
          <label htmlFor="">Email</label>
          <input name="name" placeholder="Email" type="text" />
        </div>

        <h2>State: {state.name}</h2>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContactList;
