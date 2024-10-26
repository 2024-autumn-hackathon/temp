'use client';

import MonitorFrame from "../../ui/MonitorFrame";
import LinkButton from "../../ui/LinkButton";
import { useState } from "react";
import InputField from "../../ui/InputField";
import OnClickButton from "../../ui/OnClickButton";
import ImageUploadButton from "../../ui/ImageUploadButton";
import TopButton from "../../ui/TopButton";

export default function Home({ params }) {
  const headerContent = (
    <>
      <TopButton/>
    </>
  )

  const leftContent = (
    <p>グッズのidは { params._id } だよ</p>
  );

  const rightContent = () => {
    const [inputSiries, setInputSiries] = useState('');
    const [inputCharactor, setInputCharactor] = useState('');
    const [inputGoods, setInputGoods] = useState('');
    const [inputTags, setInputTags] = useState('');
    const [inputCategories, setInputCategories] = useState('');
    const [inputJANcode, setInputJANcode] = useState('');
    const [inputReleaseDate, setInputReleaseDate] = useState('');
    const [inputWhereToBuy, setInputWhereToBuy] = useState('');

    const inputValues = [
      inputSiries,
      inputCharactor,
      inputGoods,
      inputTags,
      inputCategories,
      inputJANcode,
      inputReleaseDate,
      inputWhereToBuy
    ];
    const setFunctions = [
      setInputSiries,
      setInputCharactor,
      setInputGoods,
      setInputTags,
      setInputCategories,
      setInputJANcode,
      setInputReleaseDate,
      setInputWhereToBuy
    ];

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
        type: 'text',
      };
    });

    const inputElements = elementInfo.map((obj, idx) => {
      return (
        <InputField
          key={obj.placeholder}
          addClass={obj.addClass}
          placeholder={obj.placeholder}
          type={obj.type}
          value={inputValues[idx]}
          onChange={(e) => {
            return setFunctions[idx](e.target.value)
          }}
        />
      );
    });
    return (
      <>
        { inputElements }
        <OnClickButton>
          編集項目を確定
        </OnClickButton>
      </>
    );
  };

  const footerContent = (
    <ImageUploadButton/>
  )

  return (
    <MonitorFrame
      headerContent={ headerContent }
      leftContent={ leftContent }
      rightContent={ rightContent() }
      footerContent={ footerContent }
    />
  );
};