import styles from './ProductCard.module.css';

interface ProductCardProps {
  brand?: string;
  title: string;
  price: string | number;
  imageUrl?: string;
}

export default function ProductCard({ brand = 'Studio&Set', title, price, imageUrl }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      
      <div className={styles.imageScaleClip}>
        <div 
          className={styles.imageFrame} 
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        >
          <div className={styles.badgeDot} />
        </div>
      </div>

      <div className={styles.metaRow}>
        <div className={styles.titleBlock}>
          <span className={styles.brandName}>{brand}</span>
          <span className={styles.itemName}>{title}</span>
        </div>
        <span className={styles.itemPrice}>
          {typeof price === 'number' ? `R${price}` : price}
        </span>
      </div>

    </div>
  );
}