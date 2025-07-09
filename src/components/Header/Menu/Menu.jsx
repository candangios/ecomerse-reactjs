function Menu({ content, href, onClick }) {
  return (
    <div
      onClick={onClick}
      className='relative group text-primary hover:text-primary cursor-pointer text-[15px] '
    >
      {content}
      <span className='absolute left-0 bottom-[-8px] w-full h-[4px] bg-thr transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out'></span>
    </div>
  );
}

export default Menu;
