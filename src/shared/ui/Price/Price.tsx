import cn from 'classnames';
import { addWhiteSpaceToPrice } from '@/shared/lib';
import styles from './Price.module.scss';

interface PriceProps {
  children: React.ReactNode;
  className?: string;
}

export function Price({ className, children }: Readonly<PriceProps>) {
  return <div className={cn(styles.price, className)}>{children}</div>;
}

function New({ className, children }: Readonly<{ className?: string; children: string | number }>) {
  return <ins className={cn(styles.price__text, className)}>{addWhiteSpaceToPrice(children)}</ins>;
}

function Old({ className, children }: Readonly<{ className?: string; children: string | number }>) {
  return (
    <del className={cn(styles.price__text, styles.price__text_old, className)}>
      {addWhiteSpaceToPrice(children)}
    </del>
  );
}

Price.New = New;
Price.Old = Old;
