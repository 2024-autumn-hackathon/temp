import Link from "next/link";
import './css/LinkButton.css';

export default function LinkButton({ children, href, addClass }) {
  let className = 'link-button';
  if (addClass !== '') className += ` ${addClass}`;
  return (
    <Link 
      href={ href }
      className={ className }
    >
      <p>
        { children }
      </p>
    </Link>
  );
};