import cn from 'classnames';
import styles from './HomePage.module.scss';

interface HomePageProps {
  className?: string;
}

export function HomePage({ className }: Readonly<HomePageProps>) {
  return (
    <div className={cn(styles.homePage, className)}>HomePage</div>
  );
}