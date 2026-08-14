import cn from 'classnames';
import styles from './ButtonSlide.module.scss';

interface ButtonSlideProps {
  type: 'prev' | 'next';
  onClick: VoidFunction;
  disabled?: boolean;
  className?: string;
}

export function ButtonSlide({ type, onClick, disabled, className }: Readonly<ButtonSlideProps>) {
  let classModifier = '';

  switch (type) {
    case 'prev':
      classModifier = styles.buttonSlide_prev;
      break;
    case 'next':
      classModifier = styles.buttonSlide_next;
      break;
  }

  return (
    <button
      className={cn(styles.buttonSlide, classModifier, className)}
      onClick={onClick}
      disabled={disabled}></button>
  );
}
