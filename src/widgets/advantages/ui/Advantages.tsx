import cn from 'classnames';
import { AdvantageIcon } from './AdvantageIcon/AdvantageIcon';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  return (
    <div className={cn(styles.advantages, className)}>
      <h2>Hello</h2>
      <AdvantageIcon src="/icons/advantage-box.svg" />
    </div>
  );
}
