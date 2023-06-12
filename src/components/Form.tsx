import React, { useState } from "react";
import { addContact } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

type payload = {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  status: string;
};
const Form = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [mobileNum, setMobileNum] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.contactReducer.contacts);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleMobileNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNum(e.target.value);
  };

  const statusHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      status === "" ||
      mobileNum === ""
    ) {
      alert("Please enter data in all the fields");
      return;
    }

    const id = contacts.length !== 0 ? contacts[contacts.length - 1].id + 1 : 1;
    const payload: payload = {
      id,
      firstName,
      lastName,
      mobile: mobileNum,
      status,
    };
    dispatch(addContact(payload));

    alert("Contact added successfully!");

    setFirstName("");
    setLastName("");
    setMobileNum("");
    setStatus("");
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-y-2.5"
      onSubmit={submitHandler}
    >
      <div className="flex gap-2.5">
        <label>First Name:</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="flex gap-2.5">
        <label>Last Name:</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="flex gap-2.5 ml-5">
        <label>Mobile :</label>
        <input
          type="text"
          pattern="\d*"
          minLength={10}
          maxLength={10}
          className="bg-gray-50 border border-gray-300 text-gray-900"
          value={mobileNum}
          onChange={handleMobileNumChange}
        />
      </div>
      <div className="flex gap-2.5 mr-16">
        <label className="mt-4">Status :</label>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-1.5">
            <input
              type="radio"
              onChange={statusHandler}
              value={"active"}
              checked={status === "active"}
            />
            <label>Active</label>
          </div>
          <div className="flex gap-1.5">
            <input
              type="radio"
              onChange={statusHandler}
              value={"inactive"}
              checked={status === "inactive"}
            />
            <label>Inactive</label>
          </div>
        </div>
      </div>
      <button
        className="outline outline-cyan-500 p-1 text-cyan-500"
        type="submit"
      >
        Save Contact
      </button>
    </form>
  );
};

export default Form;
