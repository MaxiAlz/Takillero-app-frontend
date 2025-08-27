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
