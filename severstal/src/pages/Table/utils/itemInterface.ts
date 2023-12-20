export interface Item {
  id: number;
  parentId: number;
  isActive: boolean;
  balance: string;
  name: string;
  email: string;
  children: Item[];
}
