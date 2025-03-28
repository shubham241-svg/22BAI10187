import React from 'react'
import { fetchApi } from '../api/api'
import UserCard from '../components/UserCard'
import { useState, useEffect } from 'react';

const TopUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetchApi('/users').then((data)=>{
        if(data) setUsers(data);

    })
  },[])

  return (
    <div className='p-4'>
        <h1 className="text-xl font-bold">Top Users</h1>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
    </div>
  )
}

export default TopUsers
