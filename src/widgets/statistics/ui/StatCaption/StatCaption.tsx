import cn from 'classnames';
import styles from './StatCaption.module.scss';

interface StatCaptionProps {
  children: string;
  className?: string;
}

export function StatCaption({ children, className }: Readonly<StatCaptionProps>) {
  return <span className={cn(styles.statCaption, className)}>{children}</span>;
}
