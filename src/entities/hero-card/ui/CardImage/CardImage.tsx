import cn from 'classnames';
import styles from './CardImage.module.scss';

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CardImage({ src, alt, className }: Readonly<CardImageProps>) {
  return <img className={cn(styles.cardImage, className)} src={src} alt={alt} />;
}
