import React from "react";

const Form = ({ actions, values }) => {
  const { addNewContact, setContact } = actions;
  const { newName, newNumber } = values;
  return (
    <form onSubmit={addNewContact}>
      <fieldset>
        <legend>Add a new</legend>
        <div>
          Name:
          <input
            value={newName}
            placeholder="Insert Your name"
            onChange={setContact}
            name="name"
          />
        </div>
        <div>
          Number:
          <input
            value={newNumber}
            placeholder="Insert Your phone number"
            onChange={setContact}
            name="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
