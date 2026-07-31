import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero className={styles.homePage__hero} />
    </>
  );
}
