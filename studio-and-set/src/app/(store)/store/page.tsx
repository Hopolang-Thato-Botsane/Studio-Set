import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { STORE_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './store.module.css';

export const revalidate = 60;

export default async function StorePage() {
  const allProducts = await client.fetch<any[]>(STORE_PRODUCTS_QUERY) || [];

  const apparel = allProducts.filter((p) => p.category?.toLowerCase() === 'apparel');
  const accessories = allProducts.filter((p) => p.category?.toLowerCase() === 'accessories');
  const props = allProducts.filter((p) => p.category?.toLowerCase() === 'props');
  const displayApparel = apparel.length > 0 ? apparel : allProducts;

  return (
    <main className={styles.storeBody}>
      
      {displayApparel.length > 0 && (
        <section className={styles.catalogSection}>
          <h2 className={styles.sectionHeading}>Apparel</h2>
          <div className={styles.productGrid}>
            {displayApparel.map((product) => (
              <ProductCard
                key={product._id}
                brand={product.brand}
                title={product.title}
                price={product.price}
                imageUrl={product.productImage ? urlFor(product.productImage).url() : ''}
                iconUrl={product.iconUrl}
                sizes={product.sizes}
              />
            ))}
          </div>
        </section>
      )}

      {accessories.length > 0 && (
        <section className={styles.catalogSection}>
          <h2 className={styles.sectionHeading}>Accessories</h2>
          <div className={styles.productGrid}>
            {accessories.map((product) => (
              <ProductCard
                key={product._id}
                brand={product.brand}
                title={product.title}
                price={product.price}
                imageUrl={product.productImage ? urlFor(product.productImage).url() : ''}
                iconUrl={product.iconUrl}
                sizes={product.sizes}
              />
            ))}
          </div>
        </section>
      )}

      {props.length > 0 && (
        <section className={styles.catalogSection}>
          <h2 className={styles.sectionHeading}>Props</h2>
          <div className={styles.productGrid}>
            {props.map((product) => (
              <ProductCard
                key={product._id}
                brand={product.brand}
                title={product.title}
                price={product.price}
                imageUrl={product.productImage ? urlFor(product.productImage).url() : ''}
                iconUrl={product.iconUrl}
                sizes={product.sizes}
              />
            ))}
          </div>
        </section>
      )}

    </main>
  );
}