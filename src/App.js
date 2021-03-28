import React, { useState } from "react";
import Contact from "./Components/Contact";
import "./styles.css";

const App = () => {
  //states
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, number: "(0414) 7861458" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  //functions
  const setContact = (e) => {
    console.log(e.target);
    e.target.name === "name"
      ? setNewName(e.target.value)
      : setNewNumber(e.target.value);
  };
  const numberFormatter = (number) => {
    const regex = /^[0-9]{0,4}/;
    const firstNumbers = number.match(regex).join("");
    const numberFormatted = number.replace(firstNumbers, `(${firstNumbers}) `);
    return numberFormatted;
  };
  const isNameSaved = (nameLooked) => {
    const regex = new RegExp(nameLooked, "ig");
    let nameSaved;
    persons.forEach(({ name }) => {
      if (regex.test(name)) nameSaved = true;
    });
    return nameSaved;
  };

  const addNewContact = (e) => {
    e.preventDefault();
    const contactData = {
      name: newName,
      id: persons.length + 1,
      number: numberFormatter(newNumber)
    };
    isNameSaved(newName)
      ? alert(`${newName} is already added to the Phonebook`)
      : setPersons(persons.concat(contactData));

    setNewName("");
    setNewNumber("");
  };

  //rendering
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewContact}>
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
