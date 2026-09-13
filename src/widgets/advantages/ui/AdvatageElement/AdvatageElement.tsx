import cn from 'classnames';
import type { ObjectAdvantage } from '../../model';
import { AdvantageIcon } from '../AdvantageIcon/AdvantageIcon';
import { AdvantageText } from '../AdvantageText/AdvantageText';
import styles from './AdvatageElement.module.scss';

interface AdvatageElementProps extends ObjectAdvantage {
  className?: string;
}

export function AdvatageElement({ src, text, className }: Readonly<AdvatageElementProps>) {
  return (
    <li className={cn(styles.advatageElement, className)}>
      <AdvantageIcon src={src} />
      <AdvantageText>{text}</AdvantageText>
    </li>
  );
}
