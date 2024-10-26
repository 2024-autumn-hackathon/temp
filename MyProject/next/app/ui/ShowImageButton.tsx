import OnClickButton from "./OnClickButton";
import './css/ShowImageButton.css';

export default function ShowImageButton({ children }) {
  const handleClick = function(){console.log('画像を表示したい')};
  const addClass = 'show-image-button';
  return (
    <OnClickButton
      handleClick={ handleClick }
      addClass={ addClass }
    >
      { children }
    </OnClickButton>
  );
};