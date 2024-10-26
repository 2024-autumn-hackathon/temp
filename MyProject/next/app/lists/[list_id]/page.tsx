'use client';

import { useState } from "react";
import CollectionListItemsViewLeft from "../../ui/CollectionListItemsViewLeft";
import MonitorFrame from "../../ui/MonitorFrame";
import NavigationButton from "../../ui/NavigationButton";
import OnClickButton from "../../ui/OnClickButton";
import TopButton from "../../ui/TopButton";

export default function Home({ params }) {
  const [isImageView, setIsImageView] = useState(false);
  const headerContent = (
    <>
      <TopButton/>
    </>
  );

  const leftContent = (
    <CollectionListItemsViewLeft params={ params } isImageView={ isImageView }/>
  )

  const rightContent = (
    isImageView !== true ?
    <>
      <NavigationButton>コレクション一覧を<br/>表示中・・・</NavigationButton>
      <OnClickButton>チェック項目を<br/>リストから削除</OnClickButton>
      <OnClickButton handleClick={() => setIsImageView(!isImageView)}
      >画像ビューに切り替え</OnClickButton>
    </>
    :
    <>
      <NavigationButton>コレクション一覧を<br/>表示中・・・</NavigationButton>
      <OnClickButton handleClick={() => setIsImageView(!isImageView)}
      >テキストビューに切り替え</OnClickButton>
    </>
  );
  return (
    <MonitorFrame
      headerContent={ headerContent }
      leftContent={ leftContent }
      rightContent={ rightContent }
      // footerContent={ footerContent }
    />
  );
};