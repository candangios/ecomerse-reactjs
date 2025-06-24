import { useState } from 'react';
import useScrollHandling from '../../hooks/useScrollHanding';
import useTranslateXImage from '../../hooks/useTranslateXImage';

function SaleHomePage() {
  const { translateXPosition } = useTranslateXImage();
  console.log(translateXPosition);
  return (
    <div className='mx-auto mt-[100px] flex justify-between items-center'>
      <div
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.6s ease'
        }}
        // className={` translate-x-[${translateXPosition}px]`}
      >
        <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg' />
      </div>
      <div className='flex flex-col  w-[184px] items-center justify-center gap-4 '>
        <h2 className='text-3xl text-center'>Sale of The Year</h2>
        <p className='text-sm text-center text-secondary'>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <btn className='btn'>Read more</btn>
      </div>
      <div
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg' />
      </div>
    </div>
  );
}

export default SaleHomePage;
