import { useState } from 'react';
import cn from 'classnames';
import { CatalogNav } from '../CatalogNav/CatalogNav';
import styles from './DesktopNav.module.scss';

interface DesktopNavProps {
  className?: string;
}

export function DesktopNav({ className }: Readonly<DesktopNavProps>) {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);

  function handleOpenCatalog() {
    setIsOpenCatalog(true);
  }

  function handleCloseCatalog() {
    setIsOpenCatalog(false);
  }

  return (
    <nav className={cn(styles.desktopNav, className)}>
      <ul className={styles.desktopNav__list}>
        <NavElement onActive={handleCloseCatalog} to="/">
          Главная
        </NavElement>
        <CatalogNavElement onActive={handleOpenCatalog} isOpen={isOpenCatalog} to="/catalog">
          Каталог
        </CatalogNavElement>
        <NavElement onActive={handleCloseCatalog} to="/wholesale">
          Оптовая продажа
        </NavElement>
        <NavElement onActive={handleCloseCatalog} to="/about">
          О нас
        </NavElement>
      </ul>
    </nav>
  );
}

// CatalogArrow
interface CatalogArrowProps {
  isOpen: boolean;
}

function CatalogArrow({ isOpen }: Readonly<CatalogArrowProps>) {
  return (
    <span
      className={cn(styles.catalogArrow, {
        [styles.catalogArrow_isOpen]: isOpen,
      })}></span>
  );
}

// NavElement
interface NavElementProps {
  to: string;
  onActive: VoidFunction;
  children: string;
}

function NavElement({ to, onActive, children }: Readonly<NavElementProps>) {
  return (
    <li className={styles.navElement}>
      <a className={styles.navElement__link} href={to} onMouseEnter={onActive} onFocus={onActive}>
        {children}
      </a>
    </li>
  );
}

// CatalogNavElement
interface CatalogNavElementProps extends NavElementProps {
  isOpen: boolean;
}

function CatalogNavElement({ to, onActive, isOpen, children }: Readonly<CatalogNavElementProps>) {
  return (
    <li className={styles.navElement}>
      <a className={styles.navElement__link} href={to} onMouseEnter={onActive} onFocus={onActive}>
        {children}
        <CatalogArrow isOpen={isOpen} />
      </a>
      <CatalogNav isOpen={isOpen} className={styles.navElement__catalogNav} />
    </li>
  );
}
