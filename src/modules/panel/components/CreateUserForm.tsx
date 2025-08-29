import { RoundedFilledButton, RoundedOutlineButton } from '../../../components';
import { useState } from 'react';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { CreateUserFormData } from '../interfaces/adminTypes';
import { useUsersMutation } from '../hooks/useUsersMutations';
import { useQueryClient } from '@tanstack/react-query';
import { useAlert } from '../../../context/AlertContext';
import { getBackendErrorMessage } from '../../../helpers/handleApiErrors';

interface CreateUserFormProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PasswordValidation {
  minLength: boolean;
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

const roleOptions = [
  { value: 0, label: 'PRODUCTOR' },
  { value: 1, label: 'ADMINISTRADOR' },
  { value: 2, label: 'COMPRADOR' },
  { value: 3, label: 'TICKETSCANNER' },
];

const CreateUserForm = ({ setOpenModal }: CreateUserFormProps) => {
  const queryClient = useQueryClient();
  const userMutation = useUsersMutation();
  const { showErrorToast, showSuccessToast } = useAlert();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<CreateUserFormData>>({});
  const [formData, setFormData] = useState<CreateUserFormData>({
    name: '',
    email: '',
    username: '',
    password: '',
    role: 0,
  });
  // Password validation
  const validatePassword = (password: string): PasswordValidation => {
    return {
      minLength: password.length >= 6,
      hasLowercase: /[a-z]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[^a-zA-Z0-9]/.test(password),
    };
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CreateUserFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.username.trim())
      newErrors.username = 'El nombre de usuario es requerido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    else if (!isPasswordValid)
      newErrors.password = 'La contraseña no cumple con los requisitos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('formData', formData);
      userMutation.mutate(formData, {
        onSuccess: (data) => {
          console.log('data', data);
          queryClient.invalidateQueries({ queryKey: ['users', 'list'] });
          const message = getBackendErrorMessage(data.message);
          showSuccessToast(message ? message : 'Usuario creada con éxito');
          setOpenModal(false);
        },
        onError: (data) => {
          console.log('data', data);

          showErrorToast('Error al crear usuario');
        },
      });
    }
  };

  const passwordValidation = validatePassword(formData.password);
  const isPasswordValid = Object.values(passwordValidation).every(Boolean);

  const handleInputChange = (
    field: keyof CreateUserFormData,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="mt-1 block text-black  dark:text-white ">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            placeholder="Juan Perez"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors.name && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="mt-1 block text-black dark:text-white">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            placeholder="JuanPerez@hotmail.com"
            className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              {errors.email}
            </p>
          )}
        </div>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <label className="mt-1 block text-black dark:text-white">
              Nombre de usuario
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              placeholder="Juan_Perez"
              className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            {errors.username && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                {errors.username}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="userRole"
              className="mt-1 block text-black dark:text-white"
            >
              Seleccionar rol de usuario
            </label>

            <select
              id="userRole"
              required
              className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            >
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value.toString()}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </section>
        <div>
          <label
            htmlFor="password"
            className="mt-1 block text-black dark:text-white"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full rounded-lg border-[1.5px] my-2 bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              placeholder="Ingresa la contraseña"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div className="mt-3 p-3 bg-gray-50 dark:bg-boxdark-2 rounded-lg">
            <p className="text-sm dark:text-white ont-medium mb-2">
              Requisitos de contraseña:
            </p>
            <div className="space-y-1">
              <div
                className={`flex items-center gap-2 text-xs ${
                  passwordValidation.minLength
                    ? 'text-success'
                    : 'dark:text-white'
                }`}
              >
                {passwordValidation.minLength ? (
                  <BsCheckCircle />
                ) : (
                  <BsXCircle />
                )}
                Al menos 6 caracteres
              </div>
              <div
                className={`flex items-center gap-2 text-xs ${
                  passwordValidation.hasLowercase
                    ? 'text-success'
                    : 'dark:text-white'
                }`}
              >
                {passwordValidation.hasLowercase ? (
                  <BsCheckCircle />
                ) : (
                  <BsXCircle />
                )}
                Al menos una letra minúscula
              </div>
              <div
                className={`flex items-center gap-2 text-xs ${
                  passwordValidation.hasUppercase
                    ? 'text-success'
                    : 'dark:text-white'
                }`}
              >
                {passwordValidation.hasUppercase ? (
                  <BsCheckCircle />
                ) : (
                  <BsXCircle />
                )}
                Al menos una letra mayúscula
              </div>
              <div
                className={`flex items-center gap-2 text-xs ${
                  passwordValidation.hasNumber
                    ? 'text-success'
                    : 'dark:text-white '
                }`}
              >
                {passwordValidation.hasNumber ? (
                  <BsCheckCircle />
                ) : (
                  <BsXCircle />
                )}
                Al menos un número
              </div>
              <div
                className={`flex items-center gap-2 text-xs ${
                  passwordValidation.hasSpecialChar
                    ? 'text-success'
                    : 'dark:text-white'
                }`}
              >
                {passwordValidation.hasSpecialChar ? (
                  <BsCheckCircle />
                ) : (
                  <BsXCircle />
                )}
                Al menos un carácter especial (@, #, !, etc.)
              </div>
            </div>
          </div>

          {errors.password && (
            <p className="text-sm dark:text-white flex items-center gap-1">
              {errors.password}
            </p>
          )}
        </div>
        <div className="flex justify-between mt-5">
          <RoundedOutlineButton
            text="Cancelar"
            onClick={() => setOpenModal(false)}
          />
          <RoundedFilledButton
            type="submit"
            disabled={userMutation.isPending}
            text="Crear usuario"
            isLoading={userMutation.isPending}
          />
        </div>
      </form>
    </div>
  );
};

export { CreateUserForm };
