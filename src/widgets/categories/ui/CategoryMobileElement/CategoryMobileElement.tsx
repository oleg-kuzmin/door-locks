import cn from 'classnames';
import { CategoryTitle } from '../CategoryTitle/CategoryTitle';
import styles from './CategoryMobileElement.module.scss';

interface CategoryMobileElementProps {
  src: string;
  text: string;
  className?: string;
}

export function CategoryMobileElement({
  src,
  text,
  className,
}: Readonly<CategoryMobileElementProps>) {
  return (
    <li className={cn(styles.categoryMobileElement, className)}>
      <div className={styles.categoryMobileElement__imageContainer}>
        <img className={styles.categoryMobileElement__image} src={src} alt={text} />
      </div>
      <CategoryTitle className={styles.categoryMobileElement__title}>{text}</CategoryTitle>
    </li>
  );
}
