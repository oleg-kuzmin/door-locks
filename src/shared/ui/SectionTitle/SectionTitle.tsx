import cn from 'classnames';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  children: string;
  className?: string;
}

export function SectionTitle({ children, className }: Readonly<SectionTitleProps>) {
  return <h2 className={cn(styles.sectionTitle, className)}>{children}</h2>;
}
