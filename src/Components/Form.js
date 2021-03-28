import React from "react";

const Form = ({ actions, values }) => {
  const { addNewContact, setContact } = actions;
  const { newName, newNumber } = values;
  return (
    <form onSubmit={addNewContact}>
      <fieldset>
        <legend>Add a new</legend>
        <div>
          <label for="name">Name: </label>
          <input
            value={newName}
            placeholder="Insert Your name"
            onChange={setContact}
            name="name"
            required
            pattern="[a-zA-z\s]{0,}"
            title="Only words and spaces are accepted"
          />
        </div>
        <div>
          <label for="number">Number: </label>
          <input
            value={newNumber}
            placeholder="Insert Your phone number"
            onChange={setContact}
            name="number"
            required
            pattern="[0-9]{11,11}"
            title="Only numbers are allowed and 11 number are required"
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
