'use client';

import { useState } from 'react';
import MonitorFrame from "../ui/MonitorFrame";
import InputField from "../ui/InputField";
import TopButton from '../ui/TopButton';
import GoodsLinkButton from '../ui/GoodsLinkButton';
import CheckBox from '../ui/CheckBox';
import PagenationContainer from '../ui/PagenationContainer';
import PagenationListContainer from '../ui/PagenationListContainer';
import ShowImageButton from '../ui/ShowImageButton';
import PagenationNavi from '../ui/PagenationNavi';
import DropDownList from '../ui/DropDownList';
import LinkButton from '../ui/LinkButton';
import OnClickButton from '../ui/OnClickButton';

export default function Home() {
  const headerContent = (
    <>
      <TopButton/>
    </>
  );

  const leftContent = () => {
    const [isChecked, setIsChecked] = useState(Array(10).fill(false));
    const goodsList = Array(10).fill(null).map((val, idx) => {

      return (
        <PagenationListContainer
          key={ idx }
          maxViewNumber={10}
        >
          <GoodsLinkButton
            href={`/items/item${idx}`}
          >
            グッズ { idx + 1 } だよ
          </GoodsLinkButton>
          <CheckBox
            checked={isChecked[idx]}
            className='select-checkbox'
            handleChange={ () => handleChange(idx) }
          />
          <ShowImageButton>
            画像 { idx + 1 } を表示
          </ShowImageButton>
        </PagenationListContainer>
      );
    });

    function handleChange(idx) {
      console.log(idx + 1);
      const newIsCheckedList = [...isChecked];
      newIsCheckedList[idx] = !newIsCheckedList[idx];
      setIsChecked(newIsCheckedList);
    };

    return (
      <>
        <PagenationContainer>
          { goodsList }
        </PagenationContainer>
        <PagenationNavi/>
      </>
    );
  };
  
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
        <LinkButton href='/lists'>コレクションリストを作成</LinkButton>
        <DropDownList/>
        <OnClickButton>
          選択項目をリストに追加
        </OnClickButton>
      </>
    );
  };

  return (
    <MonitorFrame
      headerContent={ headerContent }
      leftContent={ leftContent() }
      rightContent={ rightContent() }
      // footerContent={ footerContent }
    />
  );
};