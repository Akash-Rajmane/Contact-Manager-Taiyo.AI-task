import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";

const Contact = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="outline outline-cyan-500 p-1 text-cyan-500 m-8"
        onClick={() => setShowForm(!showForm)}
      >
        Create Contact
      </button>
      {showForm && <Form />}
      <List />
    </div>
  );
};

export default Contact;
