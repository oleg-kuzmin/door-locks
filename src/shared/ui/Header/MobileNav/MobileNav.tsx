import { Link } from 'react-router';
import cn from 'classnames';
import styles from './MobileNav.module.scss';

interface MobileNavProps {
  className?: string;
}

export function MobileNav({ className }: Readonly<MobileNavProps>) {
  return (
    <nav className={cn(styles.mobileNav, className)}>
      <ul className={styles.mobileNav__list}>
        <NavElement to="/">Главная</NavElement>
        <CatalogNavElement to="/catalog">Каталог</CatalogNavElement>
        <NavElement to="/wholesale">Оптовая продажа</NavElement>
        <NavElement to="/about">О нас</NavElement>
      </ul>
    </nav>
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
