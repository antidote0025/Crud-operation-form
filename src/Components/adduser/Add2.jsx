import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import "./add3.css"
import toast from 'react-hot-toast'

const Add2 = () => {

  const users = {
    fname: "",
    lname: "",
    email: "",
    age: "",
    password: ""
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const sumbitForm = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:8000/api/create", user)
      .then((response) => {
        toast.success(response.data.msg,{position:"top-right"})
        navigate("/")
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Create New User</h3>

      <form className='addUserForm' onSubmit={sumbitForm}>

        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input type="text" onChange={inputHandler} id='fname' name='fname' autoComplete='off' placeholder='first name' />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname">Last name</label>
          <input type="text" onChange={inputHandler} id='lname' name='lname' autoComplete='off' placeholder='last name' />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" onChange={inputHandler} id='email' name='email' autoComplete='off' placeholder='enter email' />
        </div>

        <div className="inputGroup">
          <label htmlFor="age">Age</label>
          <input type="number" onChange={inputHandler} id='age' name='age' autoComplete='off' placeholder='enter age' />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={inputHandler} id='password' name='password' autoComplete='off' placeholder='enter password' />
        </div>

        <div className="inputGroup">
          <button type='submit'>ADD USER</button>
        </div>

      </form>

    </div>
  );
}

export default Add2;
