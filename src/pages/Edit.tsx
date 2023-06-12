import React, { useState, useEffect } from "react";
import { editContact } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

type payload = {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  status: string;
};
const Edit = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [mobileNum, setMobileNum] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.contactReducer.contacts);
  const params = useParams();
  const pid: string | any = params.id;
  const id: number = parseInt(pid);
  let navigate = useNavigate();

  const currentContact = contacts.filter((el: any) => el.id === id);
  const {
    firstName: fName,
    lastName: lName,
    mobile,
    status: contactStatus,
  } = currentContact[0];

  useEffect(() => {
    if (currentContact.length !== 0) {
      setFirstName(fName);
      setLastName(lName);
      setMobileNum(mobile);
      setStatus(contactStatus);
    }
  }, [currentContact.length, fName, lName, mobile, contactStatus]);

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

  const editHandler = (e: React.FormEvent) => {
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

    const payload: payload = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      mobile: mobileNum,
      status: status,
    };
    dispatch(editContact(payload));

    alert("Contact edited successfully!");

    setFirstName("");
    setLastName("");
    setMobileNum("");
    setStatus("");
    navigate("/");
  };

  return (
    <>
      {currentContact.length === 0 ? (
        <p className="text-center text-red-500">
          Contact List is empty, so cannot edit contact!
        </p>
      ) : (
        <form
          className="flex flex-col justify-center items-center gap-y-2.5 mt-8"
          onSubmit={editHandler}
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
          <div className="flex gap-x-6">
            <button
              className="outline outline-cyan-500 p-1 text-cyan-500"
              type="submit"
            >
              Save Edited Contact
            </button>
            <button
              className="outline outline-cyan-500 p-1 text-cyan-500"
              type="button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Edit;
