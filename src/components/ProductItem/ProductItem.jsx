function ProductItem({ data }) {
  return (
    <div className=' flex flex-col gap-2'>
      <div className='relative group overflow-hidden'>
        <div className=' absolute w-[50px] bg-gray-100 right-[-50px] bottom-[20px] h-[200px] transform transition-transform duration-300 translate-x-0 group-hover:translate-x-[-70px]'>
          This appe on hover!
        </div>
        <img
          src={data?.images[0]}
          className='block group-hover:hidden'
          alt='product'
        />
        <img
          src={data?.images[1]}
          className='hidden group-hover:block '
          alt='product'
        />
      </div>

      <h2 className='text-primary font-roboto font-normal'>{data?.name}</h2>
      <p className='text-secondary text-sm '>${data?.price}</p>
    </div>
  );
}

export default ProductItem;
