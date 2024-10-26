import OnClickButton from "./OnClickButton";


export function ChangeViewButton({ children }) {
  function changeView() {
    setIsImageView(!isImageView);
    return isImageView;
  }
  return (
    <OnClickButton
      handleClick={changeView}
    >
      { children }
    </OnClickButton>
  );
};
