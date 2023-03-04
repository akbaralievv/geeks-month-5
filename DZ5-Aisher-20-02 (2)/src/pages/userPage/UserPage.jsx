import React, {useEffect, useState} from 'react'
import {createUser} from '../../redux/action'
import {useDispatch, useSelector} from "react-redux";

const UserPage = () => {
    const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const message = useSelector(state => state.userReducer.message)


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, username, email, website };

    dispatch(createUser(user))
    setName('')
    setUsername('')
    setEmail('')
    setWebsite('')
    
  };

  return <>
    <form onSubmit={handleSubmit}>

          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br/>

          <label>Username:</label>
          <input  type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br/>
        
  
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
<br/>
      
      
  
          <label>Website:</label>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
  <br/>
      
      <button type="submit">Create User</button>
    </form>
      <div>
          {
              message === 'success'
              &&
              <h2 style={{color: 'green'}}>Успешно Создан юзер</h2>
          }
      </div>
  </>
};

export default UserPage;