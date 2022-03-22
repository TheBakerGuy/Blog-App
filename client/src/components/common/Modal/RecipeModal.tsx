import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { recipeModalStateAction } from "../../../redux/reducers/modalSlice";
import { createRecipe } from "../../../redux/reducers/recipesSlice";
import styles from "./RecipeModal.module.css";
import { Formik, FieldArray, Field } from "formik";
import Input from "../Input/Input";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input as ChakraInput,
  Textarea
} from "@chakra-ui/react";

interface initialValuesProps {
  title: string;
  description: string;
  photo?: string;
  food_category: string[];
  ingredients: string[];
  cook_time: string;
}

const RecipeModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, status } = useAppSelector((state) => ({
    ...state.modals.recipeModal,
    ...state.recipes,
  }));

  const onClose = () => {
    dispatch(
      recipeModalStateAction({
        isOpen: false,
      })
    );
  };

  const initialRef = useRef(null);

  const initialValues: initialValuesProps = {
    title: "",
    description: "",
    food_category: [""],
    ingredients: [""],
    cook_time: "",
  };
  console.log(status);
  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            dispatch(createRecipe(values));
            actions.resetForm();
            onClose();
            console.log(values)
          }}
        >
          {(FormikProps) => {
            const { setFieldValue, isSubmitting, errors, values, handleChange, handleSubmit } =
              FormikProps;

            return (
              <form onSubmit={handleSubmit}>
                <ModalContent width={["90%", "90%", "100%", "100%", "100%"]}>
                  <ModalHeader>Create a Recipe</ModalHeader>
                  <ModalCloseButton />

                  <ModalBody pb={6}>
                    <Input
                      id="title"
                      placeholder="tacos al pastor"
                      label="Nombre de la receta"
                      name="title"
                      isRequired={true}
                    />

                    <FormControl mt={4}>
                      <FormLabel>Lista de Ingredientes</FormLabel>
                      <FieldArray name="ingredients">
                        {(fieldArrayProps) => {
                          const { push, remove } = fieldArrayProps;
                          return (
                            <div>
                              {values.ingredients.map((ingr, i) => (
                                <Flex key={i}>
                                  <Field placeholder="ingredientes..." name={`ingredients[${i}]`} as={ChakraInput}/>
                                  {i > 0 && (
                                    <Button onClick={() => remove(i)} variant="unstyled">
                                      <i className={`fa-solid fa-circle-minus ${styles.icon}`} />
                                    </Button>
                                  )}
                                  <Button onClick={() => push("")} variant="unstyled">
                                    <i className={`fa-solid fa-circle-plus ${styles.icon}`} />
                                  </Button>
                                </Flex>
                              ))}
                            </div>
                          );
                        }}
                      </FieldArray>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Categorias</FormLabel>
                      <FieldArray name="food_category">
                        {(fieldArrayProps) => {
                          const { push, remove, form, insert } = fieldArrayProps;
                          return (
                            <div>
                              {values.food_category.map((ingr, i) => (
                                <Flex key={i}>
                                  <Field placeholder="categoria..." name={`food_category[${i}]`} as={ChakraInput}/>
                                  {i > 0 && (
                                    <Button onClick={() => remove(i)} variant="unstyled">
                                      <i className={`fa-solid fa-circle-minus ${styles.icon}`} />
                                    </Button>
                                  )}
                                  <Button onClick={() => push("")} variant="unstyled">
                                    <i className={`fa-solid fa-circle-plus ${styles.icon}`} />
                                  </Button>
                                </Flex>
                              ))}
                            </div>
                          );
                        }}
                      </FieldArray>
                    </FormControl>

                    <Input
                      id="cook_time"
                      placeholder="20 min..."
                      label="Tiempo de cocion"
                      name="cook_time"
                      isRequired={true}
                    />

                    <FormControl mt={4}>
                      <FormLabel>Pasos para preparar</FormLabel>
                      <Field
                        placeholder="Escribe paso a paso..."
                        name="description"
                        id="description"
                        as={Textarea}
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="teal" mr={3} type="submit">
                      Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};

export default RecipeModal;
