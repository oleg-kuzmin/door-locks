import cn from 'classnames';
import styles from './ButtonMobileNav.module.scss';

interface ButtonMobileNavProps {
  isOpen: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonMobileNav({ isOpen, onClick, className }: Readonly<ButtonMobileNavProps>) {
  return (
    <button className={cn(styles.buttonMobileNav, className)} onClick={onClick}>
      <span
        className={cn(styles.buttonMobileNav__line, {
          [styles.buttonMobileNav__line_active]: isOpen,
        })}></span>
      <span
        className={cn(styles.buttonMobileNav__line, {
          [styles.buttonMobileNav__line_active]: isOpen,
        })}></span>
      <span
        className={cn(styles.buttonMobileNav__line, {
          [styles.buttonMobileNav__line_active]: isOpen,
        })}></span>
    </button>
  );
}
