import React from "react";

const Contact = ({ data: { name }, data: { number } }) => (
  <li>
    {name} {number}
  </li>
);

export default Contact;
