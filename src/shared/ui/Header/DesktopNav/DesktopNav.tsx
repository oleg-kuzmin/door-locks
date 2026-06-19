import { useState } from 'react';
import cn from 'classnames';
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
        <NavElement to="/" onActive={handleCloseCatalog}>
          Главная
        </NavElement>
        <CatalogNavElement to="/catalog" onActive={handleOpenCatalog} isOpen={isOpenCatalog}>
          Каталог
        </CatalogNavElement>
        <NavElement to="/wholesale" onActive={handleCloseCatalog}>
          Оптовая продажа
        </NavElement>
        <NavElement to="/about" onActive={handleCloseCatalog}>
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
  children: React.ReactNode;
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

// CatalogNavElement = NavElement + CatalogArrow
interface CatalogNavElementProps extends NavElementProps {
  isOpen: boolean;
}

function CatalogNavElement({ to, onActive, isOpen, children }: Readonly<CatalogNavElementProps>) {
  return (
    <NavElement to={to} onActive={onActive}>
      {children}
      <CatalogArrow isOpen={isOpen} />
    </NavElement>
  );
}
