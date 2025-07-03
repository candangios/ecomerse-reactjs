function Menu({ content, href, onClick }) {
  return (
    <div
      onClick={onClick}
      className='relative group text-primary hover:text-primary cursor-pointer overflow-hidden text-[15px] '
    >
      {content}
      <span class='absolute left-0 bottom-0 w-full h-[3px] bg-primary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out'></span>
    </div>
  );
}

export default Menu;
