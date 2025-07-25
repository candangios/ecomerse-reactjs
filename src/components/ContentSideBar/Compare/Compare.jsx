import { RefreshCcw } from 'lucide-react';
import ItemProduct from '../Components/ItemProduct';
import Button from '@/components/Button/Button';

function Compare() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2 p-4'>
        <RefreshCcw className='text-primary' />
        <h1 className='text-xl text-primary'>Compare</h1>
      </div>
      <div className='flex-1 flex-col gap-1 p-4'>
        <ItemProduct />
        <ItemProduct />
      </div>
      <div className='flex flex-col w-full p-4 gap-1'>
        <Button content={'VIEW COMPARE'} />
      </div>
    </div>
  );
}

export default Compare;
