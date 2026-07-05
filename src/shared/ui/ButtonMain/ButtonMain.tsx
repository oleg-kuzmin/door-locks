import cn from 'classnames';
import styles from './ButtonMain.module.scss';

interface ButtonMainProps {
  children: string;
  onClick: VoidFunction;
  className?: string;
}

export function ButtonMain({ children, onClick, className }: Readonly<ButtonMainProps>) {
  return (
    <button className={cn(styles.buttonMain, className)} onClick={onClick}>
      {children}
    </button>
  );
}
