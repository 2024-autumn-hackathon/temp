import MonitorFrame from "../../ui/MonitorFrame";
import TopButton from "../../ui/TopButton";
import ImageViewer from "../../ui/ImageViewer";
import InputField from "../../ui/InputField";
import OnClickButton from "../../ui/OnClickButton";
import ImageUploadButton from "../../ui/ImageUploadButton";

export default function Home() {
  const headerContent = (
    <>
      <TopButton/>
    </>
  );

  const leftContent = (
    <ImageViewer/>
  );

  const rightContent = () => {
    const placeholderList = [
      '作品名',
      'キャラ名',
      '商品名',
      'タグ',
      'グッズカテゴリー',
      'JANコード',
      '発売日',
      '購入場所'
    ];

    const elementInfo = Array(8).fill(null).map((val, idx) => {
      return {
        addClass: 'goods-info',
        placeholder: placeholderList[idx],
        type: 'input',
      };
    });

    const inputElements = elementInfo.map((obj, idx) => {
      return (
        <InputField
          key={obj.placeholder}
          addClass={obj.addClass}
          placeholder={obj.placeholder}
          type={obj.type}
        />
      );
    });
    return (
      <>
        { inputElements }
        <OnClickButton>
          登録！
        </OnClickButton>
      </>
    );
  };

  const footerContent = (
    <ImageUploadButton/>// ボタンの右いらない
  );

  return (
    <MonitorFrame
      headerContent={ headerContent }
      leftContent={ leftContent }
      rightContent={ rightContent() }
      footerContent={ footerContent }
    />
  );
}