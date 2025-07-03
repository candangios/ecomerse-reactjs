import Button from '../Button/Button';

function Banner() {
  return (
    <div className=' bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/02-SLIDESHOW-1.jpeg)] min-h-[750px] bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-[42px] text-primary font-normal'>
          XStore Marseille04 Demo
        </h1>
        <div className='text-thr font-normal text-[16px]'>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button className=' mt-3 primaryBtn ' content='Go To Shop'></Button>
      </div>
    </div>
  );
}

export default Banner;
