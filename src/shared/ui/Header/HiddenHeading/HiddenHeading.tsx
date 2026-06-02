import cn from 'classnames';
import styles from './HiddenHeading.module.scss';

interface HiddenHeadingProps {
  children: string;
  className?: string;
}

export function HiddenHeading({ children, className }: Readonly<HiddenHeadingProps>) {
  return <h1 className={cn(styles.hiddenHeading, className)}>{children}</h1>;
}
