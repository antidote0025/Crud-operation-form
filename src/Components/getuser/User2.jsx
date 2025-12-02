import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./user.css";
import { Link } from "react-router-dom";

const User2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://crud-backend-d1nd.onrender.com/api/getall"
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch users", { position: "top-right" });
      }
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `https://crud-backend-d1nd.onrender.com/api/delete/${userId}`
      );
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success(response.data.msg, { position: "top-right" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete user", { position: "top-right" });
    }
  };
  return (
  <div className="userTable">
    <Link to="/add" className="addButton">
      Add User
    </Link>

    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={user._id}>
            <td data-label="S.No.">{index + 1}</td>

            <td data-label="User Name">
              {user.fname} {user.lname}
            </td>

            <td data-label="User Email">{user.email}</td>

            <td data-label="Age">{user.age}</td>

            <td data-label="Actions" className="actionButtons">
              <button onClick={() => deleteUser(user._id)} className="deleteBtn">
                <i className="fa-solid fa-trash"></i>
              </button>

              <Link to={`/edit/${user._id}`} className="editBtn">
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

};

export default User2;
