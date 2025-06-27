import { RefreshCcw } from 'lucide-react';
import ItemProduct from '../Components/ItemProduct';

function Compare() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2 p-4'>
        <RefreshCcw className='text-primary' />
        <h1 className='text-xl text-primary'>Compare</h1>
      </div>
      <div className='flex flex-col gap-1 p-4'>
        <ItemProduct />
        <ItemProduct />
      </div>
    </div>
  );
}

export default Compare;
