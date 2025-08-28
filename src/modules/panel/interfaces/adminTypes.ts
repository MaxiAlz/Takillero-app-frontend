export interface CategoryFormData {
  name: string;
  color: string;
}
export interface Category {
  id: number;
  name: string;
  color: string;
}
export type UpdateCategoryInput = {
  categoryId: number;
  categoryFormData: CategoryFormData;
};

export interface UserDataPaginated {
  items: UsersItems[];
  pageIndex: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface UsersItems {
  name: string;
  role: string;
  createdAt: Date;
}

export interface UsersDataResponde {
  data: UserDataPaginated;
  message: string;
}
