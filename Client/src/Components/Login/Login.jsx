import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    var[state,setState]=useState({
        email:'',
        password:''
    })

    var Navigate=useNavigate('');

    function handlestate(e){
         setState({
            ...state,
            [e.target.name]:e.target.value
         })
    }

    function getrequestcall(e) {
        e.preventDefault(); 
        console.log(state);
        axios.post('http://localhost:7409/auth/login',state).then((res)=>{
          console.log(res,'data')
          if(res.data.ok){
            localStorage.setItem('token',res.data.token);
            alert(res.data.message);
            Navigate('/home')
            setState({
              email:'',
              password:''
          })
          }
        }).catch((error)=>{
          console.log(error)
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
            name='email'
            value={state.email}
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
