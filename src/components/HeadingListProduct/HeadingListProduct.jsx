import ProductItem from '../ProductItem/ProductItem';
import HeadingCountDown from './HeadingCountdown';

function HeadingListproducts({ data }) {
  return (
    <section>
      <div className=' mx-auto container grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 '>
        <HeadingCountDown />
        <div className='grid grid-cols-2 gap-2.5'>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
              details={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeadingListproducts;
