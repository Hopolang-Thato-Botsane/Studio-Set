import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { STORE_PRODUCTS_QUERY } from '@/sanity/lib/queries';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import styles from './store.module.css';

export const revalidate = 60;

const FOOTER_QUERY = `*[_type == "footerConfig"][0] {
  ctaHeading,
  ctaButtonText,
  ctaButtonLink,
  "imageUrl": bannerImage.asset->url,
  storeCtaHeading,
  storeCtaButtonText,
  "storeImageUrl": storeBannerImage.asset->url,
  studioLinks[] { _key, label, route },
  showroomLinks[] { _key, label, route },
  contactLinks[] { _key, label, route },
  copyrightText
}`;

export default async function StorePage() {
  const [allProducts, footerData] = await Promise.all([
    client.fetch<any[]>(STORE_PRODUCTS_QUERY).then(res => res || []),
    client.fetch<any>(FOOTER_QUERY)
  ]);

  const apparel = allProducts.filter((p) => p.category?.toLowerCase() === 'apparel');
  const accessories = allProducts.filter((p) => p.category?.toLowerCase() === 'accessories');
  const props = allProducts.filter((p) => p.category?.toLowerCase() === 'props');
  const displayApparel = apparel.length > 0 ? apparel : allProducts;

  return (
    <div className={styles.pageWrapper}>


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

      <Footer variant="store" data={footerData} />
    </div>
  );
}