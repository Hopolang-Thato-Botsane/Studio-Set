import Link from 'next/link';
import ProductCard from '../ProductCard/ProductCard';
import styles from './StorePreview.module.css';

interface ProductItem {
  id: string;
  brand: string;
  title: string;
  price: string | number;
  imageUrl?: string;
  sizes?: string[];
}

interface StorePreviewProps {
  products?: ProductItem[];
  headingTitle?: string;
}

export default function StorePreview({ products = [], headingTitle = 'MERCHANDISE' }: StorePreviewProps) {
  return (
    <section className={styles.storeSection}>
      <div className={styles.innerContainer}>
        
        <h2 className={styles.sectionHeading}>{headingTitle}</h2>

        <div className={styles.productGrid}>
          {products?.map((item) => (
            <ProductCard 
              key={item.id}
              brand={item.brand}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              sizes={item.sizes} // 2. Pass sizes down safely into the ProductCard view layer
            />
          ))}
        </div>

        <div className={styles.actionContainer}>
          <Link href="/store" className={styles.visitStoreLink}>
            Visit Store
          </Link>
        </div>

      </div>
    </section>
  );
}