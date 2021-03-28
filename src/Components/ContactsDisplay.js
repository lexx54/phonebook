import React from "react";
import Contact from "./Contact";

const ContactsDisplay = ({ persons, filterContacts }) => (
  <ul>
    {persons
      .filter(({ name }) => {
        const regex = new RegExp(filterContacts, "ig");
        return regex.test(name);
      })
      .map((person) => (
        <Contact data={person} key={person.id} />
      ))}
  </ul>
);

export default ContactsDisplay;
