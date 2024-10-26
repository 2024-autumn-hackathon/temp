import Image from 'next/image';

export default function ImageViewer() {
  return (
    <Image
      fill={ true }
      alt='コンテンツ画像です'
      src='/torio.png'
    />
  );
};