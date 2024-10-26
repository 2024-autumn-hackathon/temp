import './css/OnClickButton.css';

export default function OnClickButton({ children, addClass, handleClick }) {
  let className = 'click-button';
  if (addClass !== '') className += ` ${addClass}`;
  return (
    <button
      className={ className }
      onClick={ handleClick }
    >
      { children }
    </button>
  );
};