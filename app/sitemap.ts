import axios from "axios";
import { MetadataRoute } from "next";
import { ProductType } from "types/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL!}/product`, { params: { limit: 1000 } });
  let productEntries: MetadataRoute.Sitemap = [];
  if (!response.data || !Array.isArray(response.data.Data.products)) {
    productEntries = [];
  } else {
    productEntries = response.data.Data.products.map((product: ProductType) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL!}/products/${product.slug}`,
      lastModified: product.date_modified || product.date_added || new Date().toISOString(),
      changeFrequency: "weekly",
    }));
  }

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL!}/about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL!}/contact`,
    },
    ...productEntries
  ];
}