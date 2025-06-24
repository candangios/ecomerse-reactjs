function ProductItem({ data }) {
  return (
    <div className='flex flex-col gap-2'>
      <img src={data?.images[0]} alt='product' />
      <h2 className='text-primary font-roboto font-normal'>{data?.name}</h2>
      <p className='text-secondary text-sm '>${data?.price}</p>
    </div>
  );
}

export default ProductItem;
