import { apiService } from '../../../services/apiService';
import {
  CreateUserFormData,
  UsersDataResponde,
} from '../interfaces/adminTypes';

export const userRepository = {
  async createUser(userData: CreateUserFormData) {
    const { data } = await apiService.post<UsersDataResponde>(
      '/Users',
      userData,
    );
    return data;
  },
  async updateUser(userId: number, userData: CreateUserFormData) {
    const { data } = await apiService.post<UsersDataResponde>(
      `/user/${userId}`,
      userData,
    );
    return data;
  },

  async getUsers(page: number) {
    const { data } = await apiService.get<UsersDataResponde>(
      `/Users?pageIndex=${page}`,
    );
    return data;
  },
};
