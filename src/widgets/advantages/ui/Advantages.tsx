import cn from 'classnames';
import { Content, SectionTitle } from '@/shared/ui';
import type { ObjectAdvantage } from '../model';
import { AdvatageElement } from './AdvatageElement/AdvatageElement';
import styles from './Advantages.module.scss';

interface AdvantagesProps {
  className?: string;
}

const advatages: ObjectAdvantage[] = [
  {
    src: '/icons/advantage-box.svg',
    text: 'Возврат удвоенной стоимости каждого замка в случае брака.',
  },
  {
    src: '/icons/advantage-logo.svg',
    text: 'Возврат удвоенной стоимости каждого замка в случае брака.',
  },
  {
    src: '/icons/advantage-box.svg',
    text: 'Наносим ваш логотип компании на наш продукт',
  },
];

export function Advantages({ className }: Readonly<AdvantagesProps>) {
  return (
    <div className={cn(styles.advantages, className)}>
      <Content>
        <SectionTitle className={styles.advantages__title}>Почему GoldenService?</SectionTitle>
        <ul className={styles.advantages__list}>
          {advatages.map((advatage, index) => (
            <AdvatageElement key={index} src={advatage.src} text={advatage.text} />
          ))}
        </ul>
      </Content>
    </div>
  );
}
