import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPasword]  = useState('');

  return (
    <div className="login container">
      <Form>
        <Form.Group controlId="Username">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter username/email" />        
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className="submit">Login</button>
      </Form>
      <style jsx>{`
        .login {
          width: 33%;   
          padding: 3%;       
        }      
        #formBasicPassword,
        #Username {
          box-shadow: 1px 1px 10px #2f4f4f;
        }
        .submit {
          color: #2f4f4f;
          cursor: pointer;
          text-transform: uppercase;
          border-radius: 5px;
        }
      `}</style>
    </div>    
  )
 
}



export default Login;