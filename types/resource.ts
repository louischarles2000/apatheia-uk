export interface Product {
  id: string;
  title: string;
  slug: string;
  type: 'Audio Book' | 'Video Course' | 'Audio Course' | 'Ebook' | 'Mixed';
  format: string[];
  description: string;
  fullDescription?: string;
  price: number;
  downloadCount: number;
  rating: number;
  imageUrl: string;
  fileSize: string;
  pages?: number;
  videoDuration?: string;
  includes: string[];
  specializations?: string[];
  previewImages?: string[];
  dateAdded: Date;
  featured?: boolean;
}
export type Resource = {
  id: string;
  title: string;
  slug: string;
  type: string; // e.g., "Guide", "Template", etc.
  description: string;
  fullDescription?: string;   // Optional, for detailed view
  price: number;  // Price in USD
  downloadCount: number; // Number of times downloaded
  rating: number; // Average rating out of 5
  imageUrl?: string; // URL to the resource image
  specializations: string[]; // Array of specialization slugs
  dateAdded: Date; // Date when the resource was added
  featured?: boolean; // Whether the resource is featured
};