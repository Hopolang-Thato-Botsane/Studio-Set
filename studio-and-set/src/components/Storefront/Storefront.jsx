import Link from 'next/link';
import styles from './Storefront.module.css';

const MERCH_ITEMS = [
  {
    id: 'merch-1',
    brand: 'Studio&Set',
    title: 'Soft Touch Hoodie',
    price: 'R550',
  },
  {
    id: 'merch-2',
    brand: 'Studio&Set',
    title: 'Soft Touch Hoodie',
    price: 'R550',
  },
  {
    id: 'merch-3',
    brand: 'Studio&Set',
    title: 'Soft Touch Hoodie',
    price: 'R550',
  },
];

export default function Storefront() {
  return (
    <section className={styles.storeSection}>
      <div className={styles.innerContainer}>
        
        <h2 className={styles.sectionHeading}>MERCHANDISE</h2>

        <div className={styles.productGrid}>
          {MERCH_ITEMS.map((item) => (
            <div key={item.id} className={styles.productCard}>
              
              <div className={styles.imageFrame}>
                <div className={styles.badgeDot} />
              </div>

              <div className={styles.metaRow}>
                <div className={styles.titleBlock}>
                  <span className={styles.brandName}>{item.brand}</span>
                  <span className={styles.itemName}>{item.title}</span>
                </div>
                <span className={styles.itemPrice}>{item.price}</span>
              </div>

            </div>
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