import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { recipeModalStateAction } from "../../../redux/reducers/modalSlice";
import styles from "./RecipeModal.module.css";

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
  Input,
  Textarea,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

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

  const initialRef = useRef(null);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent width={["90%", "90%", "100%", "100%", "100%"]}>
          <ModalHeader>Create a Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre de la Receta</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Tacos al Pastor"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Lista de Ingredientes</FormLabel>
              <InputGroup>
                <Input placeholder="1 taza de azucar" />
                <InputRightElement>
                  <i className={`fa-solid fa-plus ${styles.icon}`}></i>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Categorias</FormLabel>
              <Select placeholder="Selecciona hasta 3 categorias">
                <option>Tipica</option>
                <option>Mexicana</option>
                <option>Italiana</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tiempo de cocion</FormLabel>
              <Input placeholder="30 minutos..." />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Pasos para preparar</FormLabel>
              <Textarea placeholder="Escribe paso a paso..." />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecipeModal;
