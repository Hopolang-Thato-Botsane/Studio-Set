import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { FOOTER_QUERY, STORE_PRODUCTS_QUERY, STORE_HERO_QUERY } from '@/sanity/lib/queries';
import StoreHero from '@/components/StoreHero/StoreHero';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import styles from './store.module.css';

export const revalidate = 60;

export default async function StorePage() {
  // Fire all queries concurrently to clear up data-fetching waterfalls
  const [allProducts, footerData, heroData] = await Promise.all([
    client.fetch<any[]>(STORE_PRODUCTS_QUERY).then(res => res || []),
    client.fetch<any>(FOOTER_QUERY),
    client.fetch<any>(STORE_HERO_QUERY)
  ]);

  const apparel = allProducts.filter((p) => p.category?.toLowerCase() === 'apparel');
  const accessories = allProducts.filter((p) => p.category?.toLowerCase() === 'accessories');
  const props = allProducts.filter((p) => p.category?.toLowerCase() === 'props');
  
  // Safe layout fallback if apparel isn't sorted yet
  const displayApparel = apparel.length > 0 ? apparel : allProducts;

  return (
    <div className={styles.pageWrapper}>
      <StoreHero data={heroData} />

      <main id="catalog-grid" className={styles.storeBody}>
        
        {/* APPAREL SECTION */}
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

        {/* ACCESSORIES SECTION */}
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

        {/* PROPS SECTION */}
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

      <Footer variant="store" data={footerData} />
    </div>
  );
}