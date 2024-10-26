import './css/NavigationButton.css';

export default function NavigationButton({ children }) {
  return (
    <p className='navi-button'>
      { children }
    </p>
  );
};