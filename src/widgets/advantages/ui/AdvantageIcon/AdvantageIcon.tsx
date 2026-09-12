import cn from 'classnames';
import styles from './AdvantageIcon.module.scss';

interface AdvantageIconProps {
  src: string;
  className?: string;
}

export function AdvantageIcon({ src, className }: Readonly<AdvantageIconProps>) {
  return (
    <div
      className={cn(styles.advantageIcon, className)}
      style={{ backgroundImage: `url('${src}')` }}
    />
  );
}
