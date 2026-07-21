import { Link } from 'react-router';
import cn from 'classnames';
import styles from './ButtonMain.module.scss';

interface ButtonMainProps {
  children: string;
  onClick?: VoidFunction;
  to?: string;
  className?: string;
  [key: string]: unknown;
}

export function ButtonMain({
  children,
  to,
  onClick,
  className,
  ...otherProps
}: Readonly<ButtonMainProps>) {
  if (to) {
    return (
      <Link className={cn(styles.buttonMain, className)} to={to} {...otherProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(styles.buttonMain, className)} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
}
