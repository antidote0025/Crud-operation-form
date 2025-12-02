import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import "../adduser/add3.css";
import toast from "react-hot-toast"


const Edit = () => {

  const users = {
    fname: "",
    lname: "",
    email: "",
    age  : "",

  }

  const {id} = useParams();
  const navigate = useNavigate(Navigate);
  const [user,setUser]= useState(users);
  
  const inputChangeHandler = (e)=>{
   const {name,value}= e.target;
   setUser({...user,[name]:value})
   console.log(user);
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
      setUser(response.data);

    })
    .catch((error)=>{
      console.log(error)
    })

    
  },[id])


const sumbitForm = async(e)=>{
 e.preventDefault();
  await axios.put (`http://localhost:8000/api/update/${id}`,user)
  .then((response)=>{
    toast.success(response.data.msg,{psoition:"top right"})
    navigate("/")
  })
  .catch((error)=>console.log(error))
}

  return (
    <div className='addUser' onSubmit={sumbitForm}>
      <Link to={"/"}>Back</Link>
      <h3> Update User</h3>
      <form className='addUserForm'>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input type="text" value={user.fname} onChange={inputChangeHandler} id='fname' name='fname' autoComplete='off' placeholder='first name'/>
        </div>

        <div className="inputGroup">
          <label htmlFor="lname"> Last name</label>
          <input type="text" value={user.lname} onChange={inputChangeHandler} id='lname' name='lname' autoComplete='off' placeholder='last name'/>
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input type="email" value={user.email} onChange={inputChangeHandler} id='email' name='email' autoComplete='off' placeholder='enter email'/>
        </div>
        
        <div className="inputGroup">
          <label htmlFor="age">Age</label>
          <input type="number" value={user.age} onChange={inputChangeHandler} id='age' name='age' autoComplete='off' placeholder='enter age'/>
        </div>

        <div className="inputGroup">
          <button type='sumbit'> Update USER</button>
        </div>

      </form>
      
    </div>
  )
}

export default Edit;
