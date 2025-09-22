import { apiService } from '../../../services/apiService';

export const uploadRepository = {
  async uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const { data } = await apiService.post<string>('/Files/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return data; // La URL que devuelve el backend
  },
};
