import { X } from 'lucide-react';

function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  skuProduct,
  sizeProduct,
  quantity,
  productId,
  userId
}) {
  return (
    <div className='relative w-full group flex gap-4 p-3 hover:bg-primary/5 transition-colors duration-300 overflow-hidden'>
      <button className='w-[30px] h-[30px] absolute group-hover:translate-x-[0px] top-0 right-0 transform translate-x-[30px] transition-transform cursor-pointer'>
        <X className='text-secondary mx-auto my-auto' />
      </button>
      <img className='w-[70px] h-[84px]' src={src} alt='product' />
      <div className='flex flex-col gap-1'>
        <h2 className='text-primary text-[16px]'>
          {nameProduct}-{sizeProduct}
        </h2>
        <p className='text-[14px] text-secondary'>
          {quantity} x ${priceProduct}
        </p>
        <p className='text-[14px] text-secondary'>SKU: {skuProduct}</p>
      </div>
    </div>
  );
}

export default ItemProduct;
