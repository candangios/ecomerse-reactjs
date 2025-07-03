import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Auth() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {isRegister ? (
        <RegisterForm setIsRegister={setIsRegister} />
      ) : (
        <LoginForm setIsRegister={setIsRegister} />
      )}
    </>
  );
}

export default Auth;
