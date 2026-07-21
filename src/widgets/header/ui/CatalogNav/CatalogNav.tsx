import { useState } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';
import { ButtonMain } from '@/shared/ui';
import styles from './CatalogNav.module.scss';

const catalogList = [
  { name: 'Накладные электронные замки', to: '/' },
  { name: 'Врезные электронные замки', to: '/' },
  { name: 'Замки для квартиры', to: '/' },
  { name: 'Замки для дома', to: '/' },
  { name: 'Замки для отелей', to: '/' },
  { name: 'Замки для офиса', to: '/' },
  { name: 'Замки для шкафчиков', to: '/' },
  { name: 'Замки для раздевалок', to: '/' },
];

interface CatalogNavProps {
  className?: string;
}

export function CatalogNav({ className }: Readonly<CatalogNavProps>) {
  const [activeName, setActiveName] = useState(catalogList.at(0)?.name);

  function handleActiveElement(name: string) {
    setActiveName(name);
  }

  return (
    <nav className={cn(styles.catalogNav, className)}>
      <ul className={styles.catalogNav__list}>
        {catalogList.map(element => (
          <CatalogElement
            key={element.name}
            name={element.name}
            to={element.to}
            isActive={element.name === activeName}
            onActive={handleActiveElement}
          />
        ))}
      </ul>
      <ButtonMain
        className={styles.catalogNav__buttonMain}
        to="/"
        onMouseEnter={() => setActiveName('')}
        onFocus={() => setActiveName('')}>
        Смотреть все
      </ButtonMain>
    </nav>
  );
}

// CatalogElement
interface CatalogElementProps {
  name: string;
  to: string;
  isActive: boolean;
  onActive: (name: string) => void;
}

function CatalogElement({ name, to, isActive, onActive }: Readonly<CatalogElementProps>) {
  return (
    <li
      className={styles.catalogElement}
      key={name}
      onMouseEnter={() => onActive(name)}
      onFocus={() => onActive('')}>
      <Link className={styles.catalogElement__link} to={to}>
        {name}
      </Link>
      <div
        className={cn(styles.catalogElement__underline, {
          [styles.catalogElement__underline_active]: isActive,
        })}></div>
    </li>
  );
}
