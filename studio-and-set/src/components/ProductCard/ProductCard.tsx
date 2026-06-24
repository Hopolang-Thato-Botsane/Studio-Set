import styles from './ProductCard.module.css';

interface ProductCardProps {
  brand?: string;
  title: string;
  price: string | number;
  imageUrl?: string;
  iconUrl?: string;
  sizes?: string[];
}

export default function ProductCard({ 
  brand = 'Studio&Set', 
  title, 
  price, 
  imageUrl,
  iconUrl,
  sizes = [] 
}: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      
      <div className={styles.imageScaleClip}>
        <div 
          className={styles.imageFrame} 
          style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        >
          {/* Your brand asset wrapper replacing the dot */}
          <div className={styles.iconBadge}>
            <svg 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.basketSvg}
            >
              {/* Production container / basket geometry */}
              <path 
                d="M32 42C32 35 36 31 43 31H57C64 31 68 35 68 42V45C72 45 74 48 74 52V64C74 71 69 75 62 75H38C31 75 26 71 26 64V52C26 48 28 45 32 45V42ZM44 35C41.5 35 40 36.5 40 39V45H60V39C60 36.5 58.5 35 56 35H44Z" 
                fill="currentColor"
              />
            </svg>
          </div>
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