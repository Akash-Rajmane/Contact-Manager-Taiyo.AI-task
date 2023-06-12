import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../actions/actions";
import { useNavigate } from "react-router-dom";

type element = {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  status: string;
};

const List = () => {
  let navigate = useNavigate();
  const contacts = useSelector((state: any) => state.contactReducer.contacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length === 0 ? (
        <div className="mt-4 mb-4">
          <p className="text-red-500 text-center"> No contact found.</p>
          <p className="text-red-500">
            Please add contact from Create Contact Button
          </p>
        </div>
      ) : (
        <ul>
          {contacts.map((el: element) => {
            return (
              <li key={el.id} className="m-2.5">
                <p>
                  <span>First Name: </span>
                  <span>{el.firstName}</span>
                </p>
                <p>
                  <span>Last Name: </span>
                  <span>{el.lastName}</span>
                </p>
                <p>
                  <span>Mobile Number: </span>
                  <span>{el.mobile}</span>
                </p>
                <p>
                  <span>Status: </span>
                  <span>{el.status}</span>
                </p>
                <div className="flex gap-2.5 mt-1.5">
                  <button
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => navigate(`/edit/${el.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => dispatch(deleteContact(el.id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;
