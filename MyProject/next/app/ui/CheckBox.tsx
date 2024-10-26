import './css/CheckBox.css'

export default function CheckBox({ checked, handleChange, className }) {
  return (
    <input
      type='checkbox'
      checked={ checked }
      onChange={ handleChange }
      className={ className }
    >
    </input>
  );
};