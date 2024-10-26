import './css/PagenationListContainer.css';

export default function PagenationListContainer({ children }) {
  return (
    <li
      className='pagenation-list-container'
    >
      { children }
    </li>
  );
};