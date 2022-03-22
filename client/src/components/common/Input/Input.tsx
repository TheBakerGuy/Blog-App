import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import { FieldAttributes, useField } from "formik";

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  type?: string;
} & FieldAttributes<{}>;

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  type,
  isRequired,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormControl isRequired={isRequired} {...field} isInvalid={!!errorText}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput id={id} placeholder={placeholder} />
      {!!errorText && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
