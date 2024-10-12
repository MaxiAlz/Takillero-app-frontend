// import { apiService } from '../../../api/apiService';
// import { UserLoginData } from '../types/authTypes';

// const loginUserService = async (userLoginData: UserLoginData) => {
//   try {
//     const { data } = await apiService.post('/Auth/login', userLoginData);
//     console.log('data', data);
//     return data;
//   } catch (error: unknown) {
//     console.log('ocurrio un error', error);
//     throw error;
//   }
// };

// const getProfileUser = async () => {
//   try {
//     const response = await apiService.get('/Auth/profile');
//     console.log('response', response);
//     return response;
//   } catch (error) {
//     console.log('error', error);
//     throw new Error('error');
//   }
// };

// export { loginUserService, getProfileUser };
