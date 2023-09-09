import classNames from 'classnames';
import "./Button.scss";

export const Button = ({ content, container }) => {
  const buttonClasses = classNames('button', {
    'button--contacts': container === 'contacts',
    'button--blue': container !== 'contacts',
  });

  return (
    <button className={buttonClasses}>
      {content}
    </button>
  );
};