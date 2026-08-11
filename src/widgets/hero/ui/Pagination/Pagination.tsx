import cn from 'classnames';
import { ButtonSlide } from '../ButtonSlide/ButtonSlide';
import { PaginationBullet } from '../PaginationBullet/PaginationBullet';
import styles from './Pagination.module.scss';

interface PaginationProps {
  length: number;
  activeIndex: number;
  onPrev: VoidFunction;
  onNext: VoidFunction;
  className?: string;
}

export function Pagination({
  length,
  activeIndex,
  onPrev,
  onNext,
  className,
}: Readonly<PaginationProps>) {
  return (
    <div className={cn(styles.pagination, className)}>
      <ButtonSlide type="prev" onClick={onPrev} />
      <div className={styles.pagination__bullets}>
        {Array.from({ length: length }, (_, index) => (
          <PaginationBullet isActive={activeIndex === index} key={index} />
        ))}
      </div>
      <ButtonSlide type="next" onClick={onNext} />
    </div>
  );
}
