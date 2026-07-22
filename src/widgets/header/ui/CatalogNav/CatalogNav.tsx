import { useState } from 'react';
import { Link } from 'react-router';
import cn from 'classnames';
import { ButtonMain } from '@/shared/ui';
import styles from './CatalogNav.module.scss';

const catalogList = [
  { name: 'Накладные электронные замки', to: '/', image: '/categories/surface-electronic.png' },
  { name: 'Врезные электронные замки', to: '/', image: '/categories/mortise-electronic.png' },
  { name: 'Замки для квартиры', to: '/', image: '/categories/apartment.png' },
  { name: 'Замки для дома', to: '/', image: '/categories/home.png' },
  { name: 'Замки для отелей', to: '/', image: '/categories/hotel.png' },
  { name: 'Замки для офиса', to: '/', image: '/categories/office.png' },
  { name: 'Замки для шкафчиков', to: '/', image: '/categories/cabinet.png' },
  { name: 'Замки для раздевалок', to: '/', image: '/categories/changing-rooms.png' },
];

interface CatalogNavProps {
  className?: string;
}

export function CatalogNav({ className }: Readonly<CatalogNavProps>) {
  const [activeName, setActiveName] = useState(catalogList.at(0)?.name || null);
  const imageSrc = catalogList.find(catalog => catalog.name === activeName)?.image || null;

  console.log(activeName);
  console.log(imageSrc);

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
        <li>
          <ButtonMain
            className={styles.catalogNav__buttonMain}
            to="/"
            onMouseEnter={() => setActiveName(null)}
            onFocus={() => setActiveName(null)}>
            Смотреть все
          </ButtonMain>
        </li>
      </ul>
      <CatalogImageContainer>
        <CatalogImage
          key={activeName}
          src={imageSrc ?? '/categories/default.png'}
          alt={activeName ?? 'смотреть все'}
        />
      </CatalogImageContainer>
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
    <li className={styles.catalogElement} key={name}>
      <Link
        className={styles.catalogElement__link}
        to={to}
        onMouseEnter={() => onActive(name)}
        onFocus={() => onActive(name)}>
        {name}
      </Link>
      <div
        className={cn(styles.catalogElement__underline, {
          [styles.catalogElement__underline_active]: isActive,
        })}></div>
    </li>
  );
}

// CatalogImageContainer
interface CatalogImageContainerProps {
  children: React.ReactNode;
}

function CatalogImageContainer({ children }: Readonly<CatalogImageContainerProps>) {
  return <div className={styles.catalogImageContainer}>{children}</div>;
}

// CatalogImage
interface CatalogImageProps {
  src: string;
  alt: string;
}

function CatalogImage({ src, alt }: Readonly<CatalogImageProps>) {
  return <img className={styles.catalogImage} src={src} alt={alt} />;
}
