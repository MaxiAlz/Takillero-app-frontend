import { apiService } from '../../../services/apiService';
import { UsersDataResponde } from '../interfaces/adminTypes';

export const userRepository = {
  // async createUser(userData: ) {
  //   const { data } = await apiService.post<TicketType>('/user', userData);
  //   return data;
  // },

  async getUsers() {
    const { data } = await apiService.get<UsersDataResponde>('/Users');
    return data;
  },
};
