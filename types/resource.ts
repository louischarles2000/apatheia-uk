export interface Resource {
  id: string;
  title: string;
  slug: string;
  type: 'Guide' | 'Template' | 'Script' | 'Handbook' | 'Tool';
  description: string;
  fullDescription?: string;
  price: number;
  downloadCount: number;
  rating: number;
  imageUrl: string;
  specializations: string[];
  previewImages?: string[];
  dateAdded: Date;
  featured?: boolean;
}
