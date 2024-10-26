import './css/PagenationContainer.css';

export default function PagenationContainer({ children, isImageView = false }) {
  let  className = 'pagenation-container'
  isImageView === false ? className += ' list-view' : className += ' image-view'
  return (
    <ul
      className={ className }
    >
      { children }
    </ul>
  );
};