import Button from '../../Button/Button';
import CommonInput from '../../CommonInput/CommonInput';

import { useForm } from 'react-hook-form';
import {
  EMAIL_RULE,
  EMAIL_RULE_MESSAGE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE
} from '@/utils/validators';
import { signIn } from '@/apis/authService';
import { useSideBar } from '@/hooks/useSideBar';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

function LoginForm({ setIsRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { dispatch } = useSideBar();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (values) => {
    const { email: username, password } = values;
    signIn({ username, password })
      .then((res) => {
        setIsLoading(false);
        const { id, token, refreshToken } = res.data;
        // setUserId(id);
        Cookies.set('token', token);
        Cookies.set('refreshToken', refreshToken);
        Cookies.set('userId', id);
        toast.success('Sign in successfully!');
        dispatch({ type: 'EXITS' });
      })
      .catch((error) => {
        setIsLoading(false);
        // toast.error('Sign in failed!');
      });
  };
  return (
    <div className='flex flex-col items-center py-4'>
      <h1 className='text-primary text-3xl uppercase'>Signin</h1>
      <form
        className='px-3 w-full flex flex-col gap-2 mt-10'
        onSubmit={handleSubmit(handleLoginSubmit)}
      >
        <CommonInput
          id='email'
          lable='Email'
          type='text'
          isRequired={true}
          error={!!errors['email']}
          placeholder='email'
          register={register('email', {
            required: FIELD_REQUIRED_MESSAGE,
            pattern: { value: EMAIL_RULE, message: EMAIL_RULE_MESSAGE }
          })}
          errors={errors}
        />

        <CommonInput
          id='password'
          lable='Password'
          type='password'
          isRequired={true}
          register={register('password', {
            required: FIELD_REQUIRED_MESSAGE,
            pattern: { value: PASSWORD_RULE, message: PASSWORD_RULE_MESSAGE }
          })}
          errors={errors}
        />

        <div className='flex gap-2'>
          <input className='text-primary' type='checkbox'></input>
          <span>Remember me</span>
        </div>
        <Button type='submit' disabled={isLoading} content={'Login'}></Button>
      </form>
      <span className='mx-auto mt-2'>Lost for password?</span>
      <span className='mx-auto mt-2'>
        Do not have account?{' '}
        <span
          className='cursor-pointer underline'
          onClick={() => setIsRegister(true)}
        >
          Register
        </span>
      </span>
    </div>
  );
}

export default LoginForm;
