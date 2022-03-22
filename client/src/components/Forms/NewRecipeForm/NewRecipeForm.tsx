import { useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import styles from "./NewRecipeForm.module.css";
import { Formik, FieldArray, Field, Form } from "formik";
import Input from "../../common/Input/Input";
import InputGroup from "../../common/InputGroup/InputGroup";
import Textarea from "../../common/Textarea/Textarea";
import { Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react";

interface INewRecipesForm {
  onFormSumit?: (values: any) => void;
}

interface initialValuesProps {
  title: string;
  description: string;
  photo?: string;
  food_category: string[];
  ingredients: string[];
  cook_time: string;
}

const NewRecipeForm: React.FC<INewRecipesForm> = (props) => {
  const { onFormSumit } = props;

  const [inputValue, setInputValue] = useState<string>("");
  const [seachTerms, setSeachTerms] = useState<string>("");
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const initialValues: initialValuesProps = {
    title: "",
    description: "",
    food_category: [],
    ingredients: [],
    cook_time: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.resetForm();
        console.log(values);
      }}
    >
      {(FormikProps) => {
        const { errors, values, handleSubmit } = FormikProps;

        const handleUserInput = (e: any) => {
          setInputValue(e.target.value);
        };

        const handleInputField = () => {
          values.ingredients.push(inputValue);
          setInputValue("");
        };

        const onCatChage = (e: any) => {
          setSeachTerms(e.target.value);
        };

        const onCatClick = () => {
          setShowCategories(!showCategories);
        };

        return (
          <Form onSubmit={handleSubmit}>
            <Input
              id="title"
              placeholder="tacos al pastor"
              label="Nombre de la receta"
              name="title"
              isRequired={true}
            />

            <InputGroup
              className={styles.inputGroup}
              label="Lista de Ingredientes"
              placeholder="Ingredientes"
              onChange={handleUserInput}
              value={inputValue}
              onClick={handleInputField}
              disabled={inputValue === ""}
              icon={<i className="fa-solid fa-circle-plus" />}
              isRequired={true}
            />

            <FieldArray name="ingredients">
              {(fieldArrayProps) => {
                const { remove } = fieldArrayProps;
                return (
                  <div>
                    <UnorderedList>
                      {values.ingredients.map((ingr, i) => (
                        <ListItem key={`${ingr}-${i}`}>
                          {ingr}
                          <i
                            className={`fa-solid fa-circle-minus ${styles.icon}`}
                            onClick={() => remove(i)}
                          />
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </div>
                );
              }}
            </FieldArray>

            <Flex direction="column" className={styles.container}>
              <InputGroup
                className={styles.inputGroup}
                label="Categorias"
                placeholder="Busca en Categorias"
                onChange={onCatChage}
                value={seachTerms}
                onClick={onCatClick}
                isRequired={true}
                icon={<i className={`fa-solid fa-circle-${!showCategories ? "plus" : "minus"}`} />}
                onFocus={() => setShowCategories(true)}
              />

              {showCategories && <Flex className={styles.catWrapper}>testing</Flex>}
            </Flex>

            <FieldArray name="food_category">
              {(fieldArrayProps) => {
                const { push, remove } = fieldArrayProps;
                return (
                  <div>
                    {values.food_category.map((cat, i) => (
                      <Flex key={i}>
                        <Field placeholder="categoria..." name={`food_category[${i}]`} />
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

            <Input
              id="cook_time"
              placeholder="20 min..."
              label="Tiempo de cocion"
              name="cook_time"
              isRequired={true}
            />

            <Textarea
              id="description"
              placeholder="describe paso a paso"
              label="Pasos a Preparar"
              name="description"
              isRequired={true}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewRecipeForm;
