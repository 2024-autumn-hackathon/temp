import ImageUploadButton from "./ui/ImageUploadButton";
import ImageViewer from "./ui/ImageViewer";
import LinkButton from "./ui/LinkButton";
import LogoutButton from "./ui/LogoutButton";
import MonitorFrame from "./ui/MonitorFrame";


export default function Home() {
  const headerContent = (
    <>
      <LogoutButton/>
      <LinkButton href='/login'>ログインへ</LinkButton>
    </>
  )
  const leftContent = (
    <>
      <ImageViewer/>
    </>
  )
  const rightContent = (
    <nav
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <LinkButton href='/items'>グッズ検索</LinkButton>
      <LinkButton href='/items/create'>グッズ登録</LinkButton>
      <LinkButton href='/series'>タイトル一覧</LinkButton>
      <LinkButton href='/lists'>コレクションリスト</LinkButton>
      <LinkButton href=''>カレンダー</LinkButton>
      <LinkButton href=''>個別チャット</LinkButton>
    </nav>
  )
  const footerContent = (
    <>
      <ImageUploadButton/>
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
