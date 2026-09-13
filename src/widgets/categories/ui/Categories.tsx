import cn from 'classnames';
import { Content } from '@/shared/ui';
import { CategoryMobileElement } from './CategoryMobileElement/CategoryMobileElement';
import styles from './Categories.module.scss';

interface CategoriesProps {
  className?: string;
}

export function Categories({ className }: Readonly<CategoriesProps>) {
  return (
    <section className={cn(styles.categories, className)}>
      <Content>
        <ul className={styles.categories__mobileList}>
          <CategoryMobileElement src="/categories/hotel.png" text="Для отелей" />
          <CategoryMobileElement src="/categories/cabinet.png" text="Для шкафчиков" />
          <CategoryMobileElement src="/categories/office.png" text="Для офисов" />
          <CategoryMobileElement src="/categories/home.png" text="Аксессуары" />
        </ul>
      </Content>
    </section>
  );
}
