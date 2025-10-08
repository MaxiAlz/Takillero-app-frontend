export interface CategoriesTypes {
  items: CategoryItems[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface CategoryItems {
  id: number;
  color: string;
  name: string;
}

export interface ResponseCategoriesTypes {
  message: string;
  data: CategoriesTypes;
}

export interface ResponseCreateCategory {
  message: string;
  data: CategoryItems;
}
