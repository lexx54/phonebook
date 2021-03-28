import React from "react";

const Contact = ({ data }) => {
  return (
    <li>
      {data.name} {data.number}
    </li>
  );
};

export default Contact;
