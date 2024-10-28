import { ButtonProps } from '../types/Button.types';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ ctaText, onClickEvent }) => (
  <button className="button" onClick={onClickEvent} type="button">
    {ctaText}
  </button>
);

export default Button;
