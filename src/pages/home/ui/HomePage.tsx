import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { PopularProducts } from '@/widgets/popular-products';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      {/* <Hero className={styles.homePage__hero} /> */}
      <PopularProducts className={styles.homePage__popularProducts} />
    </>
  );
}
