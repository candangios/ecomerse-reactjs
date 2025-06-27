import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

function CommonInput({ lable, type, isRequired = false, placeholder = '' }) {
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
              rounded-sm
              focus:outline-none
              focus:border-primary
              sm:text-sm
            '
          placeholder={placeholder}
        ></input>
        {isPassword && (
          <div
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className='absolute top-0 right-[10px] bottom-0 flex items-center cursor-pointer'
          >
            {showPassword ? (
              <EyeOffIcon size='25px' />
            ) : (
              <EyeIcon size='25px' />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommonInput;
