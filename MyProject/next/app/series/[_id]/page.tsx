import MonitorFrame from "../../ui/MonitorFrame";
import TopButton from "../../ui/TopButton";
import PagenationContainer from "../../ui/PagenationContainer";
import PagenationListContainer from "../../ui/PagenationListContainer";
import PagenationNavi from "../../ui/PagenationNavi";
import NavigationButton from "../../ui/NavigationButton";

export default function Home({ params }) {
  const headerContent = (
    <>
      <TopButton/>
    </>
  );

  const leftContent = () => {
    const characterList = Array(10).fill(null).map((val, idx) => {
      return (
        <PagenationListContainer
          key={ idx }
          maxViewNumber={ 10 }
        >
          <p>作品は { params._id } キャラクター名{ idx + 1 }だよ</p>
        </PagenationListContainer>
      );
    });

    return (
      <PagenationContainer>
        { characterList }
        <PagenationNavi/>
      </PagenationContainer>
    );
  };  

  const rightContent = (    
    <NavigationButton>キャラクター一覧を<br/>表示中・・・</NavigationButton>
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