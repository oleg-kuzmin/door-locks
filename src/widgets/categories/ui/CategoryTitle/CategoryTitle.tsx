import cn from 'classnames';
import styles from './CategoryTitle.module.scss';

interface CategoryTitleProps {
  children: string;
  className?: string;
}

export function CategoryTitle({ children, className }: Readonly<CategoryTitleProps>) {
  return <span className={cn(styles.categoryTitle, className)}>{children}</span>;
}
