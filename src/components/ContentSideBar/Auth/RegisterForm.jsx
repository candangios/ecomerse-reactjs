import Button from '../../Button/Button';
import CommonInput from '../../CommonInput/CommonInput';

import { useForm } from 'react-hook-form';
import {
  EMAIL_RULE,
  EMAIL_RULE_MESSAGE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_CONFIRMATION_MESSAGE,
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE
} from '@/utils/validators';
import { signIn } from '@/apis/authService';
import { useSideBar } from '@/hooks/useSideBar';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { signUp } from '@/apis/authService';

function RegisterForm({ setIsRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const { dispatch } = useSideBar();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (values) => {
    const { email: username, password } = values;

    signUp({ username, password })
      .then((res) => {
        toast.success(res.data.message);
        setIsRegister(false);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setIsLoading(false);
      });
  };
  return (
    <div className='flex flex-col items-center py-4'>
      <h1 className='text-primary text-3xl uppercase'>SignUp</h1>
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
        <CommonInput
          id='password_confirmation'
          lable='Enter Password Confirmation'
          type='password'
          isRequired={true}
          register={register('password_confirmation', {
            validate: (value) => {
              if (value === watch('password')) return true;
              return PASSWORD_CONFIRMATION_MESSAGE;
            }
          })}
          errors={errors}
        />
        <span className='mx-auto mt-2'>
          Do not have account?{' '}
          <span
            className='cursor-pointer underline'
            onClick={() => setIsRegister(false)}
          >
            SignIn
          </span>
        </span>

        <Button
          className='mt-4'
          type='submit'
          disabled={isLoading}
          content={'Register'}
        ></Button>
      </form>
    </div>
  );
}

export default RegisterForm;
