function HeadingCountDown() {
  return (
    <div className='bg-[url(https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/photo-of-man-wearing-white-hoodie-5474310.jpeg)] bg-no-repeat bg-cover bg-center'>
      <div className='h-full min-h-[300px] flex flex-col justify-center items-center py-6 gap-3'>
        <div className='flex gap-2'>
          <div className='bg-white px-4 py-1'>17 day</div>
          <div className='bg-white px-4 py-1'>17 day</div>
          <div className='bg-white px-4 py-1'>17 day</div>
          <div className='bg-white px-4 py-1'>17 day</div>
        </div>
        <h2 className='text-3xl text-center font-normal text-primary font-mono'>
          The classics make a comeback
        </h2>
        <button className='bg-primary hover:bg-transparent h-[50px] hover:text-primary hover:border text-white text-xl px-8  rounded-sm cursor-pointer transition-colors duration-300'>
          Buy now
        </button>
      </div>
    </div>
  );
}

export default HeadingCountDown;
