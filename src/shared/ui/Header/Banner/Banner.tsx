import cn from 'classnames';
import { Content, LinkCallForm } from '@/shared/ui';
import styles from './Banner.module.scss';

interface BannerProps {
  children: string;
  className?: string;
}

export function Banner({ children, className }: Readonly<BannerProps>) {
  return (
    <div className={cn(styles.banner, className)}>
      <Content className={styles.banner__content}>
        <p className={styles.banner__text}>{children}</p>
        <LinkCallForm className={styles.banner__linkCallForm} />
      </Content>
    </div>
  );
}
