import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import './Home.css'

// Simple Modal for adding a user
function Home() {
  const data = useLoaderData();
  const usersDetails = data.users;
  
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });

  const handleAddUser = () => {
    // Logic to add a new user (this could be an API call)
    console.log('New User:', newUser);
    setShowModal(false); // Close the modal after submitting
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Employee Management</h1>
        <button className="add-user-btn" onClick={() => setShowModal(true)}>
          <i className="fas fa-user-plus"></i> Add New User
        </button>
      </div>
      
      <table className="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            usersDetails.map((ele, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>
                  <button className="icon-btn">
                    <i className="fas fa-edit"></i> {/* Edit icon */}
                  </button>
                  <button className="icon-btn">
                    <i className="fas fa-trash-alt"></i> {/* Delete icon */}
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {/* Modal for Adding User */}
      {showModal && (
        <div className="modal"onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} >
            <h2>Add New User</h2>
            <label>Name:</label>
            <input 
              type="text" 
              value={newUser.name} 
              onChange={(e) => setNewUser({...newUser, name: e.target.value})} 
            />
            <label>Email:</label>
            <input 
              type="email" 
              value={newUser.email} 
              onChange={(e) => setNewUser({...newUser, email: e.target.value})} 
            />
            <label>Phone:</label>
            <input 
              type="tel" 
              value={newUser.phone} 
              onChange={(e) => setNewUser({...newUser, phone: e.target.value})} 
            />
            <div className="modal-actions">
              <button onClick={handleAddUser}>Add User</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
