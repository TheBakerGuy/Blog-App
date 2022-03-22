import AppModal from "../../common/Modal/AppModal";
import NewRecipeForm from "../../Forms/NewRecipeForm/NewRecipeForm";
import { recipeModalStateAction } from "../../../redux/reducers/modalSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks";

const RecipeModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => ({
    ...state.modals.recipeModal,
  }));

  const onClose = () => {
    dispatch(
      recipeModalStateAction({
        isOpen: false,
      })
    );
  };

  return (
    <AppModal modalHeader="Crear una Receta" onClose={onClose} isOpen={isOpen}>
      <NewRecipeForm />
    </AppModal>
  );
};

export default RecipeModal;
