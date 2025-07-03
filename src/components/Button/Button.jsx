import classNames from 'classnames';

function Button({ content, isPriamry = true, children, props }) {
  return (
    <button
      className={`btn ${isPriamry ? 'primaryBtn' : 'secondaryBtn'}`}
      {...props}
    >
      {content ? content : children}
    </button>
  );
}

export default Button;
