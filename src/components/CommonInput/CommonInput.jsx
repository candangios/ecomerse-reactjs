import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

function CommonInput({
  id,
  lable,
  type,
  isRequired = false,
  register,
  errors,
  ...props
}) {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;

  return (
    <div className='flex flex-col gap-1'>
      <div>
        {lable}
        {isRequired && <> *</>}
      </div>
      <div className='relative'>
        <input
          type={isShowTextPassword}
          isrequired={isRequired}
          className='
              block
              w-full
              px-3 py-2
              text-primary
              border border-gray-300
         
              focus:outline-none
              focus:border-primary
              sm:text-sm
            '
          {...register}
          {...props}
        ></input>
        {isPassword && (
          <div
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className='absolute top-0 right-[10px] bottom-0 flex items-center cursor-pointer'
          >
            {showPassword ? (
              <EyeOffIcon size='15px' className='text-primary' />
            ) : (
              <EyeIcon size='15px' className='text-primary' />
            )}
          </div>
        )}
      </div>
      {errors && errors[id]?.message && (
        <p className='text-red-500 text-[10px]'>{errors[id]?.message}</p>
      )}
    </div>
  );
}

export default CommonInput;
