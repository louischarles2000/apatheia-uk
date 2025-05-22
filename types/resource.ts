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
