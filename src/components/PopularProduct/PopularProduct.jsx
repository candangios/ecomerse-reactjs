import ProductItem from '../ProductItem/ProductItem';

function PoppularProduct({ data }) {
  return (
    <div className=' mx-auto container grid grid-cols-2 md:grid-cols-4 gap-3 '>
      {data.map((item, index) => (
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
  );
}

export default PoppularProduct;
