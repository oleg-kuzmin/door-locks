import cn from 'classnames';
import { HiddenHeading } from './HiddenHeading/HiddenHeading';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  return (
    <header className={cn(styles.header, className)}>
      <HiddenHeading>Golden Soft</HiddenHeading>
    </header>
  );
}
