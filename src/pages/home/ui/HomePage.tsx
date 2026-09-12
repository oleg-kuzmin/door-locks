import { Advantages } from '@/widgets/advantages';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { PopularProducts } from '@/widgets/popular-products';
import { Statistics } from '@/widgets/statistics';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      {/* <Hero className={styles.homePage__hero} /> */}
      {/* <PopularProducts className={styles.homePage__popularProducts} /> */}
      {/* <Statistics className={styles.homePage__statistics} /> */}
      <Advantages />
    </>
  );
}
