import { useState } from 'react';
import cn from 'classnames';
import { Content, Logo } from '@/shared/ui';
import { Banner } from './Banner/Banner';
import { ButtonIcon } from './ButtonIcon/ButtonIcon';
import { ButtonMobileNav } from './ButtonMobileNav/ButtonMobileNav';
import { DesktopNav } from './DesktopNav/DesktopNav';
import { HiddenHeading } from './HiddenHeading/HiddenHeading';
import { LinkPhone } from './LinkPhone/LinkPhone';
import { MobileNav } from './MobileNav/MobileNav';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  return (
    <>
      <header className={cn(styles.header, className)}>
        <HiddenHeading>Golden Soft</HiddenHeading>
        <Banner>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</Banner>
        <Content className={styles.header__content}>
          <ButtonMobileNav
            className={styles.header__buttonMobileNav}
            isOpen={isOpenMobileNav}
            onClick={() => setIsOpenMobileNav(isOpen => !isOpen)}
          />
          <Logo className={styles.header__logo} />
          <DesktopNav className={styles.header__desktopNav} />
          <LinkPhone className={styles.header__linkPhone} />
          <div className={styles.header__buttonIcons}>
            <ButtonIcon type="like" onClick={() => alert('Open modal Favorite')} counter={8} />
            <ButtonIcon type="cart" onClick={() => alert('Open modal Cart')} counter={10} />
          </div>
        </Content>
        <MobileNav className={styles.header__mobileNav} isOpen={isOpenMobileNav} />
      </header>
    </>
  );
}
