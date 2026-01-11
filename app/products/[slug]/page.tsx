import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/ui/Button';
import Rating from '../../../components/ui/Rating';
import Badge from '../../../components/ui/Badge';
import ProductCard from '../../../components/products/ProductCard';
import { ProductType } from '../../../types/types';
import axios from 'axios';
import PriceFormat from '../../../components/products/PriceFormat';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
import { decode } from 'html-entities';
import { formatDecodedString } from '../../../lib/utils';
import { IMAGE_PREFIX } from '../../../lib/constants';
import { Metadata } from 'next';
import ProductReviews from '../../../components/products/ProductReviews';
import { cache } from 'react';


export async function generateStaticParams() {
  // Fetch all product slugs from the API
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/product/static/slugs`);
  if (!response.data || !Array.isArray(response.data.slugs)) {
    return [];
  }

  // Map slugs to the format Next.js expects
  return response.data.slugs;
}

// cache is used to optimize performance by caching the result of the function. Incase the same slug is requested multiple times, it will return the cached result instead of making a new API call.
const getProductBySlug = cache(async(slug: string): Promise<ProductType | null> => {
  try {
    const product = await axios.get(`${process.env.NEXT_PUBLIC_WEBSITE_URL!}/api/products/slug/${slug}`);
    return product.data.Data;
  } catch (error: unknown) {
    if (error) return null;
    return null; // Return null if the product is not found or an error occurs
  }
});

const getRelatedProducts = async(productId: number): Promise<ProductType[]> => {
  // Get 3 related products based on type
  const relatedProducts = await axios.get(`${process.env.NEXT_PUBLIC_WEBSITE_URL!}/api/products/related/${productId}`, {  params: { limit: 3 } });
  return relatedProducts.data.Data.products || [];
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>; // Simplified: params is directly the object, not a Promise
}): Promise<Metadata> {
  const { slug } = await params; // No 'await' needed here, as params is already the resolved object


  if (!slug) {
    return {
      title: 'Product Not Found',
      description: 'Product details not available.',
    };
  }

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'Product details not available.',
      
    };
  }

  return {
    title: formatDecodedString(product.meta_title ?? product.title),
    description: product.meta_description ? formatDecodedString(product.meta_description) : formatDecodedString(product.description, 300),
    keywords: product.meta_keywords ? formatDecodedString(product.meta_keywords) : product.tags,
    openGraph: {
      title: formatDecodedString(product.meta_title ?? product.title),
      description: product.meta_description ? formatDecodedString(product.meta_description) : formatDecodedString(product.description, 300),
      images: [
        { 
          url: product.image ? `${IMAGE_PREFIX}/${product.image}` : '/images/placeholder.jpg',
          alt: product.title || 'Product Image'
        }
      ], // Use the product image URL
    },
    // Add other relevant metadata here
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  // const [quantity, setQuantity] = useState(1);
  const { slug } = await params;
  if (!slug) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Button href="/products" variant="primary">
          Back to Products
        </Button>
      </div>
    );
  }
  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="font-serif text-2xl mb-4">Product not found</h1>
        <p className="mb-8">The product you are looking for does not exist.</p>
        <Button href="/products" variant="primary">
          Back to Products
        </Button>
      </div>
    );
  }

  const decodedDescription = decode(product!.description);
  const clean = sanitizeHtml(decodedDescription, {
    allowedTags: false,
    allowedAttributes: false,
    allowVulnerableTags: true
  });
  const content = parse(clean);

  const relatedProducts = await getRelatedProducts(product.id);

  return (
    <div className="bg-secondary py-12">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <p className="text-sm text-text/60">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link> /
            <Link href="/products" className="mx-2 hover:text-primary transition-colors">Products</Link> /
            <span>{product.title}</span>
          </p>
        </div>

        {/* Product Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative min-h-[300px]">
              <Image
                src={product.image ? `${IMAGE_PREFIX}/${product.image}` : "/images/placeholder.jpg"}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div>
              <div className="mb-4 flex items-center">
                <Badge variant="primary" className="mr-3">{product.model}</Badge>
                {product.rating && <Rating value={product.rating} />}
                {/* <span className="ml-2 text-sm text-text/60">({product.totalReviews ?? 0} downloads)</span> */}
              </div>

              <h1 className="font-serif text-3xl font-bold text-text mb-4">{product.title}</h1>

              <p className="text-text/80 mb-6 w-[90%] word-break-keep-all">
                {/* {product.fullDescription || product.description} */}
                {formatDecodedString(product.meta_description || product.description, 300)}
              </p>

              <div className="flex items-center space-x-4 mt-6">
                {!product.discount_price && <span className="text-2xl font-bold"><PriceFormat amount={product.price} /></span>}
                { product.discount_price && (
                  <div className="flex items-baseline">
                    <span className="text-sn font-bold text-red-500 line-through mr-2">
                      <PriceFormat amount={product.price} />
                    </span>
                    <span className="text-2xl font-bold">
                      <PriceFormat amount={product.discount_price} />
                    </span>
                  </div>
                )}
               
                <Link
                  href={`${process.env.NEXT_PUBLIC_OPENCART_SHOP}&product_id=${product.id}`}
                  className="flex w-full justify-end self-end cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" className="px-8">Buy Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Product Description</h2>
          {/* The text in content overflow, Fix? Answer: use dangerouslySetInnerHTML */}
          <div className="text-text/80 break-words md:w-[90%] word-break-keep-all">
            {content}
          </div>
        </div>

        {/* Product Reviews */}
        <ProductReviews productId={product.id} />
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}