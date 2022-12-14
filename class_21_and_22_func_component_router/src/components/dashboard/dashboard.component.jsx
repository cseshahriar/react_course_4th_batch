import React from 'react';
import { useEffect, useState } from 'react';
import '../../App.css';
import UserList from '../../components/userList.component';
import SearchBar from '../../components/searchBar.component';

// pure function
const Dashboard = () => {
  const [q, setQ] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  
  const handleSearch = (event) => {
    setQ(event.target.value.toLowerCase());
    console.log("handleSearch called", event.target.value)
  };

  
  // when app trigger then call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setUsers(users));  
  }, []) // [] one time run 


  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(q);
    });
    setFilteredUsers(newFilteredUsers);
  }, [q, users]) // every change callback

  return (
    <div className="Dashboard">
      <SearchBar onChange={handleSearch} q={q}/>
      <UserList users={filteredUsers}/>
    </div>
  );
}

export default Dashboard;
