import InputField from "../ui/InputField";
import LinkButton from "../ui/LinkButton";
import MonitorFrame from "../ui/MonitorFrame";
import OnClickButton from "../ui/OnClickButton";
import TopButton from "../ui/TopButton";


export default function Home() {
  const headerContent = (
    <>
      <TopButton/>
    </>
  )
  const leftContent = (
    <>
      <InputField placeholder='メールアドレス'></InputField>
      <InputField placeholder='ユーザーネーム'></InputField>
      <InputField placeholder='パスワード'></InputField>
      <InputField placeholder='パスワード確認'></InputField>
      <OnClickButton>サインアップ</OnClickButton>
    </>
  )
  const rightContent = (
    <>
      <LinkButton href='/login'>ログインへ</LinkButton>
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
