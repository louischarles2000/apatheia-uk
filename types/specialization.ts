export interface Specialization {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconUrl: string;
  relatedResources: string[]; // Resource IDs
}
