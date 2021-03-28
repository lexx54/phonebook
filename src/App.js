import React, { useState } from "react";
import ContactsDisplay from "./Components/ContactsDisplay";
import Form from "./Components/Form";
import "./styles.css";

const App = () => {
  //states
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "(0401) 23456" },
    { name: "Ada Lovelace", number: "(3944) 5323523" },
    { name: "Dan Abramov", number: "(1243) 234345" },
    { name: "Mary Poppendieck", number: "(3923) 6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [allContact, setAllContact] = useState("");

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
    <section>
      <h1>Phonebook</h1>
      <div>
        <span>Filter show With </span>
        <input
          onChange={(e) => setAllContact(e.target.value)}
          value={allContact}
        />
      </div>
      <Form
        actions={{ addNewContact, setContact }}
        values={{ newName, newNumber }}
      />
      <h2>Numbers</h2>
      <div>
        <ContactsDisplay persons={persons} filterContacts={allContact} />
      </div>
    </section>
  );
};

export default App;
