import cn from 'classnames';
import styles from './ProductImage.module.scss';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className }: Readonly<ProductImageProps>) {
  return <img src={src} alt={alt} className={cn(styles.productImage, className)}></img>;
}
