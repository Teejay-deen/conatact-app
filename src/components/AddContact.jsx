import React from "react";

const AddContactList = () => {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" action="">
      <div className="field">
        <label htmlFor="">Name</label>
        <input name="name" placeholder="Name" type="text" />
      </div>

      <div className="field">
        <label htmlFor="">Email</label>
        <input name="name" placeholder="Email" type="text" />
      </div>

      <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContactList;
