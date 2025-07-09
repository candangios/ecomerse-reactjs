function Button({
  content,
  isPriamry = true,
  children,
  onClick,
  className = '',
  props
}) {
  return (
    <button
      onClick={onClick}
      className={`btn ${
        isPriamry ? 'primaryBtn' : 'secondaryBtn'
      } ${className}`}
      {...props}
    >
      {content ? content : children}
    </button>
  );
}

export default Button;
