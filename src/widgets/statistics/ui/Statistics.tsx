import cn from 'classnames';
import { Content } from '@/shared/ui';
import type { ObjectStat } from '../model';
import { StatElement } from './StatElement/StatElement';
import styles from './Statistics.module.scss';

interface StatisticsProps {
  className?: string;
}

const statistics: ObjectStat[] = [
  {
    caption: 'Счастливых клиентов',
    quantity: '5,567',
  },
  {
    caption: 'Продуктов на выбор',
    quantity: '1245',
  },
  {
    caption: 'Продаж в день',
    quantity: '372',
  },
  {
    caption: 'Лет на рынке',
    quantity: '20',
  },
];

export function Statistics({ className }: Readonly<StatisticsProps>) {
  return (
    <section className={cn(styles.statistics, className)}>
      <Content className={styles.statistics__content}>
        <ul className={styles.statistics__list}>
          {statistics.map((stat, index) => (
            <StatElement key={index} quantity={stat.quantity} caption={stat.caption} />
          ))}
        </ul>
      </Content>
    </section>
  );
}
