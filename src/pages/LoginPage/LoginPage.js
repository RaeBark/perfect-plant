import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div className='LoginPage'>
      <h2>{props.location.message}</h2>
        <LoginForm 
          {...props}
          handleLogin={props.handleLogin}
        />
    </div>
  );
};

export default LoginPage;