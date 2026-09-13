import cn from 'classnames';
import styles from './AdvantageText.module.scss';

interface AdvantageTextProps {
  children: string;
  className?: string;
}

export function AdvantageText({ children, className }: Readonly<AdvantageTextProps>) {
  return <span className={cn(styles.advantageText, className)}>{children}</span>;
}
