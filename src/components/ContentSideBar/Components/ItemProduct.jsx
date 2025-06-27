import { X } from 'lucide-react';

function ItemProduct() {
  return (
    <div className='relative w-full group flex gap-4 p-3 hover:bg-primary/5 transition-colors duration-300 overflow-hidden'>
      <button className='w-[30px] h-[30px] absolute group-hover:translate-x-[0px] top-0 right-0 transform translate-x-[30px] transition-transform cursor-pointer'>
        <X className='text-secondary mx-auto my-auto' />
      </button>
      <img
        className='w-[70px] h-[84px]'
        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-9.1-min-285x340.jpg'
        alt='product'
      />
      <div className='flex flex-col gap-2'>
        <h2 className='text-primary text-[16px]'>
          Dignissim molestie pellentesque
        </h2>
        <p className='text-[14px] text-secondary'>$399.99</p>
      </div>
    </div>
  );
}

export default ItemProduct;
