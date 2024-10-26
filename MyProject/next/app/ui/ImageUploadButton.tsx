import './css/ImageUploadButton.css';

export default function ImageUploadButton() {
  return (    
    <form className='image-upload-container'>
      <input
        type='file'
        className='image-upload-button'
      ></input>
      <p className='navi'>
        画像選択
      </p>
      <button
        className='image-upload-submit'
        type='submit'
      >
        画像決定
      </button>
    </form>
  );
};