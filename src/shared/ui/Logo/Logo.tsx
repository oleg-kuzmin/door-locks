import { Link } from 'react-router';
import cn from 'classnames';
import styles from './Logo.module.scss';

interface LogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export function Logo({ theme = 'light', className }: Readonly<LogoProps>) {
  return (
    <Link to="/" className={cn(styles.logo, className)}>
      <img
        className={styles.logo__image}
        src={theme === 'dark' ? '/icons/logo-dark.svg' : '/icons/logo-light.svg'}
        alt="Логотип Golden Soft"
      />
    </Link>
  );
}
