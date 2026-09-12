import cn from 'classnames';
import styles from './Caption.module.scss';

interface CaptionProps {
  children: string;
  className?: string;
}

export function Caption({ children, className }: Readonly<CaptionProps>) {
  return <span className={cn(styles.caption, className)}>{children}</span>;
}
