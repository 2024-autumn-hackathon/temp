import MonitorFrame from "../ui/MonitorFrame";
import LinkButton from "../ui/LinkButton";
import PagenationContainer from "../ui/PagenationContainer";
import PagenationListContainer from "../ui/PagenationListContainer";
import TopButton from "../ui/TopButton";
import PagenationNavi from "../ui/PagenationNavi";
import NavigationButton from "../ui/NavigationButton";

export default function Home() {
  const headerContent = (
    <>
      <TopButton/>
    </>
  )

  const leftContent = () => {
    const titleList = Array(10).fill(null).map((val, idx) => {
      return (
        <>
          <PagenationListContainer
            key={idx}
            maxViewNumber={10}
          >
            <p>作品名だよ</p>
            <LinkButton href='/series/series_id'>キャラクター一覧へ</LinkButton>
          </PagenationListContainer>
        </>
      );
    });

    return (
      <PagenationContainer>
        { titleList }
        <PagenationNavi/>
      </PagenationContainer>
    );
  };

  const rightContent = (    
    <NavigationButton>作品一覧を<br/>表示中・・・</NavigationButton>
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