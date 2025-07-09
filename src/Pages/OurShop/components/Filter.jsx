import { OurShopContext } from '@/contexts/OurShopProvider';
import { Grid3X3, List } from 'lucide-react';
import { useContext } from 'react';
import SelectBox from './SelectBox';

function Filter() {
  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);

  const getValueSelect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };
  return (
    <div className='flex items-center justify-between py-2 mt-3'>
      <div className='flex items-center gap-2'>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type='sort'
        />
        <button className='iconBtn' onClick={() => setIsShowGrid(true)}>
          <Grid3X3 />
        </button>
        <div className='h-[20px] w-[1px] bg-[#e1e1e1]' />
        <button className='iconBtn' onClick={() => setIsShowGrid(false)}>
          <List />
        </button>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='text-[#555] text-[14px]'>Show</div>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type='sort'
        />
      </div>
    </div>
  );
}

export default Filter;
