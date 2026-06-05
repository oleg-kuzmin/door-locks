import cn from 'classnames';
import styles from './Banner.module.scss';

interface BannerProps {
  children: string;
  className?: string;
}

export function Banner({ children, className }: Readonly<BannerProps>) {
  return (
    <div className={cn(styles.banner, className)}>
      <p className={styles.banner__text}>{children}</p>
    </div>
  );
}
