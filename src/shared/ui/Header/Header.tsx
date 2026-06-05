import cn from 'classnames';
import { Banner } from './Banner/Banner';
import { HiddenHeading } from './HiddenHeading/HiddenHeading';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  return (
    <header className={cn(styles.header, className)}>
      <HiddenHeading>Golden Soft</HiddenHeading>
      <Banner>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</Banner>
    </header>
  );
}
