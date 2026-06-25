import { useRef } from 'react';
import { Link } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import styles from './MobileNav.module.scss';

interface MobileNavProps {
  isOpen: boolean;
  className?: string;
}

export function MobileNav({ isOpen, className }: Readonly<MobileNavProps>) {
  const nodeRef = useRef(null);
  const { timeAnimateMobileNav } = styles;
  const timeout = parseInt(timeAnimateMobileNav);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      classNames={{ ...styles }}
      timeout={timeout}
      unmountOnExit>
      <nav className={cn(styles.mobileNav, className)} ref={nodeRef}>
        <ul className={styles.mobileNav__list}>
          <NavElement to="/">Главная</NavElement>
          <CatalogNavElement to="/catalog">Каталог</CatalogNavElement>
          <NavElement to="/wholesale">Оптовая продажа</NavElement>
          <NavElement to="/about">О нас</NavElement>
        </ul>
      </nav>
    </CSSTransition>
  );
}

// NavElement
interface NavElementProps {
  to: string;
  children: React.ReactNode;
}

function NavElement({ to, children }: Readonly<NavElementProps>) {
  return (
    <li className={styles.navElement}>
      <Link className={styles.navElement__link} to={to}>
        {children}
      </Link>
    </li>
  );
}

// CatalogNavElement
function CatalogNavElement({ to, children }: Readonly<NavElementProps>) {
  return (
    <NavElement to={to}>
      {children}
      <CatalogArrow />
    </NavElement>
  );
}

// CatalogArrow
function CatalogArrow() {
  return <span className={cn(styles.catalogArrow)}></span>;
}
