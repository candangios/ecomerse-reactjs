import CommonInput from '../CommonInput/CommonInput';

function Login() {
  console.log('render login');
  return (
    <div className='flex flex-col items-center py-4'>
      <h1 className='text-primary text-3xl uppercase'>Sign in</h1>
      <div className='px-3 w-full flex flex-col gap-2 mt-10'>
        <CommonInput lable='Email' type='email' isRequired={true} />
        <CommonInput lable='Password' type='password' isRequired={true} />
        <div className='flex gap-2'>
          <input className='forcu' type='checkbox'></input>
          <span>Remember me</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
