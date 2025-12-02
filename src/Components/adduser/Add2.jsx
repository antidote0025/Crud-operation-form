import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import "./add3.css"
import toast from 'react-hot-toast'

const Add2 = () => {

  const initialState = {
    fname: "",
    lname: "",
    email: "",
    age: "",
    password: ""
  };

  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://crud-backend-d1nd.onrender.com/api/create", user)
      toast.success(response.data.msg || "User added!", {
        position: "top-right"
      });

      setUser(initialState); // Reset form
      navigate("/");

    } catch (error) {
      console.error(error);
      toast.error("Failed to add user", {
        position: "top-right"
      });
    }
  };

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Create New User</h3>

      <form className='addUserForm' onSubmit={submitForm}>

        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input
            type="text"
            id='fname'
            name='fname'
            value={user.fname}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='first name'
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input
            type="text"
            id='lname'
            name='lname'
            value={user.lname}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='last name'
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id='email'
            name='email'
            value={user.email}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='enter email'
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id='age'
            name='age'
            value={user.age}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='enter age'
            required
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id='password'
            name='password'
            value={user.password}
            onChange={inputHandler}
            autoComplete='off'
            placeholder='enter password'
            required
          />
        </div>

        <div className="inputGroup">
          <button type='submit'>ADD USER</button>
        </div>

      </form>

    </div>
  );
}

export default Add2;
