import MonitorFrame from "../ui/MonitorFrame";
import LinkButton from "../ui/LinkButton";
import TopButton from "../ui/TopButton";
import PagenationContainer from "../ui/PagenationContainer";
import PagenationListContainer from "../ui/PagenationListContainer";
import OnClickButton from "../ui/OnClickButton";
import NavigationButton from "../ui/NavigationButton";
import InputField from "../ui/InputField";
import PagenationNavi from "../ui/PagenationNavi";

export default function Home() {
  const headerContent = (
    <>
      <TopButton/>
    </>
  )
  const leftContent = () => {
    const collectionLists = Array(10).fill(null).map((val, idx) => {
      return (
        <PagenationListContainer
          key={idx}
        >
          <p>キャラクター名 { idx + 1 } だよ</p>
          <LinkButton href='/lists/list_id'>リスト選択</LinkButton>
        </PagenationListContainer>
      );
    });

    return (
      <>
        <PagenationContainer>
          { collectionLists }
          <PagenationNavi/>
        </PagenationContainer>
      </>
    );
  };
  const rightContent = (
    <>
      <NavigationButton>コレクションリスト一覧を<br/>表示中・・・</NavigationButton>
      <LinkButton href='/items'>グッズを探す</LinkButton>
      <InputField
        placeholder='コレクションリスト名'
        type='input'
      />
      <OnClickButton>コレクションリストを作成</OnClickButton>
    </>
  );
  return (
    <MonitorFrame
      headerContent={ headerContent }
      leftContent={ leftContent() }
      rightContent={ rightContent }
      // footerContent={ footerContent }
    />
  );
};