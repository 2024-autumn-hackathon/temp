import './css/InputField.css';

export default function InputField({ addClass, placeholder, type, value, onChange }) {
  let className = 'input-field';
  if (addClass !== '') className += ` ${addClass}`;
  return (
    <input
      className={ className }
      placeholder={ placeholder }
      type={ type }
      value={ value }
      onChange={ onChange }
    />
  );
};