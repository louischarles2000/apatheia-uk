export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  purchasedResources: string[]; // Resource IDs
  savedResources: string[]; // Resource IDs
  dateJoined: Date;
}
