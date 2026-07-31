import cn from 'classnames';
import styles from './Slider.module.scss';

interface SliderProps {
  className?: string;
}

export function Slider({ className }: Readonly<SliderProps>) {
  return (
    <div className={cn(styles.slider, className)}></div>
  );
}