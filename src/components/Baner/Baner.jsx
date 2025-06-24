function Banner() {
  return (
    <div className=' bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/02-SLIDESHOW-1.jpeg)] min-h-[750px] bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-3xl text-primary font-medium'>
          XStore Marseille04 Demo
        </h1>
        <div className='text-secondary'>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <button className='bg-primary hover:bg-transparent h-[50px] hover:text-primary hover:border text-white text-xl px-8  rounded-sm mt-6 cursor-pointer transition-colors duration-300'>
          Go to shop
        </button>
      </div>
    </div>
  );
}

export default Banner;
