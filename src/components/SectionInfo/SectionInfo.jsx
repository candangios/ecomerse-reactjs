import { Clock3, Percent, ShieldCheck, Truck } from 'lucide-react';
function SectionInfo() {
  return (
    <div className='lg:container mx-auto bg-primary p-4 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8 py-4 gap-8'>
        <div className='delivery_wrapper'>
          <div className='flex items-center gap-4'>
            <p>
              <Percent color='white' size='3rem' />
            </p>
            <div>
              <h4 className='text-base text-[white] capitalize font-inter font-medium mb-2.5'>
                Discount
              </h4>
              <p className='text-sm text-[#9a9caa] font-inter font-normal'>
                every week new sales
              </p>
            </div>
          </div>
        </div>

        <div className='delivery_wrapper'>
          <div className='flex items-center gap-4'>
            <p>
              <Truck size='3rem' color='white' />
            </p>
            <div>
              <h4 className='text-base text-[white] capitalize font-inter font-medium mb-2.5'>
                Free Delivery
              </h4>
              <p className='text-sm text-[#9a9caa] font-inter font-normal'>
                100% Free for all orders
              </p>
            </div>
          </div>
        </div>

        <div className='delivery_wrapper'>
          <div className='flex items-center gap-4'>
            <p>
              <Clock3 size='3rem' color='white' />
            </p>
            <div>
              <h4 className='text-base text-[white] capitalize font-inter font-medium mb-2.5'>
                Great Support 24/7
              </h4>
              <p className='text-sm text-[#9a9caa] font-inter font-normal'>
                We care your experiences
              </p>
            </div>
          </div>
        </div>

        <div className='delivery_wrapper'>
          <div className='flex items-center gap-4'>
            <p>
              <ShieldCheck size='3rem' color='white' />
            </p>
            <div>
              <h4 className='text-base text-[white] capitalize font-inter font-medium mb-2.5'>
                Secure Payment
              </h4>
              <p className='text-sm text-[#9a9caa] font-inter font-normal'>
                100% Secure Payment Method
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInfo;
