import React, { useState } from 'react';

function Login() {
    var[state,setState]=useState({
        username:'',
        password:''
    })

    function handlestate(e){
         setState({
            ...state,
            [e.target.name]:e.target.value
         })
    }

    function getrequestcall(e) {
        e.preventDefault(); 
        console.log(state);
        axios.post('',state)
        setState({
            username:'',
            password:''
        })
      }
      
  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ backgroundColor:'white' }}
    >
      <div className="w-50 p-5 border rounded" style={{boxShadow:'0 0 7px 0 blue ' }}>
        <div className='fw-bold pb-3  fs-2 text-center'>Login</div>
        <form onSubmit={getrequestcall}>
          <input
            type="text" 
            name='username'
            value={state.username}
            placeholder="Enter user name" 
            className="form-control mb-3"
            style={{height:'50px'}}
            onChange={handlestate}
          />
          <input 
            type="password" 
            name='password'
            value={state.password}
            placeholder="Enter password" 
            className="form-control mb-3"
            style={{height:'50px'}}
            onChange={handlestate}
          />
          <button 
            type="submit" 
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
