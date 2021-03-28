import React, { useState } from "react";
import Contact from "./Components/Contact";
import "./styles.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  //functions
  const setContactName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  const addNewContact = (e) => {
    e.preventDefault();
    const contactData = {
      name: newName,
      id: persons.length + 1
    };
    setPersons(persons.concat(contactData));
    setNewName("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
        <div>
          name:{" "}
          <input
            value={newName}
            placeholder="Insert Your name"
            onChange={setContactName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => (
            <Contact data={person} key={person.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
