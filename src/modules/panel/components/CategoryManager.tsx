import { Card } from 'flowbite-react';
import { useState } from 'react';
import { ModalCustom, RoundedFilledButton } from '../../../components';
import { useEventCategories } from '../../events/hooks';
import { FaPlus } from 'react-icons/fa6';
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from '../hooks/useCategoriesMutation';
import { useQueryClient } from '@tanstack/react-query';
import { useAlert } from '../../../context/AlertContext';
import Loader from '../../../components/Loader';
import { Category } from '../interfaces/adminTypes';

const CategoryManager = () => {
  const { showErrorToast, showSuccessToast } = useAlert();
  const queryClient = useQueryClient();
  const eventCategories = useEventCategories();
  const createCategoryMutation = useCreateCategoryMutation();
  const updateCategoryMutation = useUpdateCategoryMutation();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('#ec7800');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const isEditing = !!selectedCategory;
  const modalTitle = isEditing
    ? `Editar categoría: ${selectedCategory.name}`
    : 'Crear nueva categoría';
  const buttonText = isEditing ? 'Guardar cambios' : 'Crear categoría';

  const handleSaveCategory = () => {
    const categoryFormData = {
      name: newCategoryName,
      color: newCategoryColor.replace('#', ''),
    };
    if (isEditing && selectedCategory) {
      updateCategoryMutation.mutate(
        {
          categoryId: selectedCategory.id,
          categoryFormData,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['event', 'categories'],
            });
            showSuccessToast('Categoría actualizada con éxito');
            setSelectedCategory(null);
            setNewCategoryName('');
            setNewCategoryColor('#ec7800');
          },

          onError: (error) => {
            console.log('categoryFormData', categoryFormData);
            console.error('Error updating category:', error);
            showErrorToast('Error al actualizar la categoría');
          },
        },
      );
    } else {
      createCategoryMutation.mutate(categoryFormData, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['event', 'categories'] });
          showSuccessToast('Categoría creada con éxito');
          setNewCategoryName('');
          setNewCategoryColor('#ec7800');
          setOpenModal(false);
        },
        onError: () => {
          setNewCategoryName('');
          setNewCategoryColor('#ec7800');
          setOpenModal(false);
          showErrorToast('Error al crear la categoría');
        },
      });
    }
  };

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setSelectedCategory(category);
      setNewCategoryName(category.name);
      setNewCategoryColor(
        category.color.startsWith('#') ? category.color : `#${category.color}`,
      );
    } else {
      setSelectedCategory(null);
      setNewCategoryName('');
      setNewCategoryColor('#ec7800');
      setOpenModal(true);
    }
  };

  return (
    <>
      <ModalCustom
        openModal={isEditing || openModal}
        setOpenModal={() => {
          setSelectedCategory(null);
          setOpenModal(false);
        }}
        title={modalTitle}
      >
        {createCategoryMutation.isPending ||
        updateCategoryMutation.isPending ? (
          <div className="flex justify-center items-center h-32">
            <Loader />
          </div>
        ) : (
          <div>
            <div className="flex-1">
              <label className="block font-medium mb-1">
                Nombre de la categoría
              </label>
              <input
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Ej: Música, Deporte..."
                className="dark:bg-black dark:text-white w-full border rounded-lg my-2"
              />
            </div>

            <div className="flex items-center my-2 gap-4">
              <div className="flex items-center gap-2">
                <label className="font-medium mb-1">Elija un color</label>
                <input
                  type="color"
                  value={newCategoryColor}
                  onChange={(e) => setNewCategoryColor(e.target.value)}
                  className="w-12 h-10 border rounded cursor-pointer"
                  title={newCategoryColor}
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="font-medium mb-1">Codigo Hex</label>
                <input
                  type="text"
                  value={newCategoryColor}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.match(/^#[0-9A-Fa-f]{0,6}$/)) {
                      setNewCategoryColor(value);
                    }
                  }}
                  placeholder="#3b82f6"
                  className="dark:bg-black dark:text-white text-black w-20 px-2 py-2 border rounded-md bg-background text-xs focus:outline-none focus:ring-2 focus:ring-ring"
                  maxLength={7}
                />
              </div>
            </div>

            {/* Vista previa */}
            {newCategoryName.trim() && (
              <div className="mt-4">
                <label className="block text-sm text-muted-foreground mb-1">
                  Vista previa
                </label>
                <div className="flex justify-start">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full border font-medium text-white"
                    style={{ backgroundColor: newCategoryColor }}
                  >
                    {newCategoryName}
                  </div>
                </div>
              </div>
            )}

            <div className="my-4 border-t border-gray-300"></div>
            <div className="w-full flex justify-end">
              <RoundedFilledButton
                text={buttonText}
                className="mb-2"
                onClick={handleSaveCategory}
                disabled={!newCategoryName.trim()}
              />
            </div>
          </div>
        )}
      </ModalCustom>

      <Card className="dark:bg-boxdark-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold ">Gestión de Categorías</h2>
            <p>
              Aqui podras visualizar las categorias disponibles y crear nuevas
            </p>
          </div>
          <RoundedFilledButton
            text="Crear nueva Categoria"
            icon={<FaPlus />}
            onClick={() => handleOpenModal()}
          />
        </div>

        <div>
          {eventCategories.categories?.data.items.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              <p className="text-sm">No hay categorías creadas</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {eventCategories.categories?.data.items.map((category) => (
                <div
                  onClick={() => handleOpenModal(category)}
                  key={category.id}
                  // group inline-flex items-center gap-2 px-3 py-1 rounded-full border cursor-pointer hover:shadow-sm transition-all
                  className={`border rounded-full px-3 py-1 flex items-center gap-2 hover:shadow-sm transition-all cursor-pointer group`}
                  style={{ backgroundColor: `#${category.color}` }}
                  // onClick={() => startEditing(category)}
                >
                  <span className="font-medium text-white">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export { CategoryManager };
