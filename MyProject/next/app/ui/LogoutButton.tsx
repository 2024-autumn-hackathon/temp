'use client';
import OnClickButton from "./OnClickButton";

export default function LogoutButton() {
  const handleClick = () => {
    console.log('click');
    return function(){};
  };
  return (
    <OnClickButton
      addClass='logout'
      handleClick={ handleClick }
    >
      ログアウト
    </OnClickButton>
  );
};