import TopButton from "../ui/TopButton";
import LinkButton from "../ui/LinkButton";
import MonitorFrame from "../ui/MonitorFrame";
import OnClickButton from "../ui/OnClickButton";
import InputField from "../ui/InputField";


export default function Home() {
  const headerContent = (
    <>
      <TopButton/>
    </>
  )
  const leftContent = (
    <>
      <InputField placeholder='メールアドレス'></InputField>
      <InputField placeholder='パスワード'></InputField>
      <OnClickButton>ログイン</OnClickButton>
    </>
  )
  const rightContent = (
    <>
      <LinkButton href='/signup'>サインアップへ</LinkButton>
    </>
  )
  const footerContent = (
    <>
    </>
  )
  return (
    <MonitorFrame
      headerContent={ headerContent }
      leftContent={ leftContent }
      rightContent={ rightContent }
      footerContent={ footerContent }
    />
  );
};
