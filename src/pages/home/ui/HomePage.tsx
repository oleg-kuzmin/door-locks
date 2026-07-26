import { Header } from '@/widgets/header';
import { Hero } from './Hero/Hero';
import styles from './HomePage.module.scss';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero className={styles.homePage__hero} />
    </>
  );
}
