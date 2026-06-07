import { useState } from 'react';
import cn from 'classnames';
import { Content } from '@/shared/ui';
import { Banner } from './Banner/Banner';
import { ButtonIcon } from './ButtonIcon/ButtonIcon';
import { ButtonMobileNavPanel } from './ButtonMobileNavPanel/ButtonMobileNavPanel';
import { HiddenHeading } from './HiddenHeading/HiddenHeading';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: Readonly<HeaderProps>) {
  const [isOpenMobileNavPanel, setIsOpenMobileNavPanel] = useState(false);

  return (
    <header className={cn(styles.header, className)}>
      <HiddenHeading>Golden Soft</HiddenHeading>
      <Banner>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</Banner>
      <Content className={styles.header__content}>
        <ButtonMobileNavPanel
          className={styles.header__buttonMobileNavPanel}
          isOpen={isOpenMobileNavPanel}
          onClick={() => setIsOpenMobileNavPanel(isOpen => !isOpen)}
        />
        <ButtonIcon type="like" onClick={() => alert('Open modal Favorite')} counter={8} />
        <ButtonIcon type="cart" onClick={() => alert('Open modal Cart')} counter={10} />
      </Content>
    </header>
  );
}
