import { Link } from 'react-router';
import cn from 'classnames';
import styles from './ButtonMain.module.scss';

interface ButtonMainProps {
  children: string;
  onClick?: VoidFunction;
  to?: string;
  className?: string;
}

export function ButtonMain({ children, to, onClick, className }: Readonly<ButtonMainProps>) {
  if (to) {
    return (
      <Link className={cn(styles.buttonMain, className)} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(styles.buttonMain, className)} onClick={onClick}>
      {children}
    </button>
  );
}
