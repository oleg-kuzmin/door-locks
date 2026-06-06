import cn from 'classnames';
import styles from './ButtonMobileNavPanel.module.scss';

interface ButtonMobileNavPanelProps {
  isOpen: boolean;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonMobileNavPanel({
  isOpen,
  onClick,
  className,
}: Readonly<ButtonMobileNavPanelProps>) {
  return (
    <button className={cn(styles.buttonMobileNavPanel, className)} onClick={onClick}>
      <span
        className={cn(styles.buttonMobileNavPanel__line, {
          [styles.buttonMobileNavPanel__line_active]: isOpen,
        })}></span>
      <span
        className={cn(styles.buttonMobileNavPanel__line, {
          [styles.buttonMobileNavPanel__line_active]: isOpen,
        })}></span>
      <span
        className={cn(styles.buttonMobileNavPanel__line, {
          [styles.buttonMobileNavPanel__line_active]: isOpen,
        })}></span>
    </button>
  );
}
