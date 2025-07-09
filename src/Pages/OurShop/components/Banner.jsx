import Button from '@/components/Button/Button';
import CountdownTimer from '@/components/CountdownTimer/CountDownTimer';

function Banner() {
  const targetDate = '2025-12-31T00:00:00';

  return (
    <>
      <div className='bg-[url(assets/images/banner.jpg)] min-h-[270px] bg-no-repeat bg-cover bg-center flex items-center justify-center'>
        <div className='w-full flex flex-col justify-center items-center gap-4'>
          <CountdownTimer targetDate={targetDate} />

          <div className='text-center text-3xl text-primary'>
            The Classics Make A Comeback
          </div>

          <Button content='Buy Now' />
        </div>
      </div>
    </>
  );
}

export default Banner;
