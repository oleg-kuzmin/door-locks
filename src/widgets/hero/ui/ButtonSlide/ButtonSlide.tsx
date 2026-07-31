import cn from 'classnames';
import styles from './ButtonSlide.module.scss';

interface ButtonSlideProps {
  type: 'prev' | 'next';
  className?: string;
}

export function ButtonSlide({ type, className }: Readonly<ButtonSlideProps>) {
  let classNameResult = styles.buttonSlide;

  switch (type) {
    case 'prev':
      classNameResult = cn(className, styles.buttonSlide_prev);
      break;
    case 'next':
      classNameResult = cn(className, styles.buttonSlide_next);
      break;
  }

  return <button className={cn(styles.buttonSlide, classNameResult)}></button>;
}
