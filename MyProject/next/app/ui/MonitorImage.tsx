import Image from 'next/image';

export default function MonitorImage() {
  return (
    <>
      <Image
        src='/newFrame.svg'
        alt='タブレットサイズ以上の背景画像です'
        fill={true}
        style={{'zIndex': '-1'}}
        className='hidden md:block'
      />
      <Image
        src='/smart.svg'
        alt='モバイル端末用の背景画像です'
        fill={true}
        style={{'zIndex': '-1'}}
        className='block md:hidden'
      />
    </>
  );
};