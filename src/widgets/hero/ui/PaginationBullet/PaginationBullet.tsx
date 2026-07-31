import cn from 'classnames';
import styles from './PaginationBullet.module.scss';

interface PaginationBulletProps {
  isActive?: boolean;
  className?: string;
}

export function PaginationBullet({ isActive, className }: Readonly<PaginationBulletProps>) {
  return (
    <div
      className={cn(
        styles.paginationBullet,
        { [styles.paginationBullet_active]: isActive },
        className,
      )}></div>
  );
}
