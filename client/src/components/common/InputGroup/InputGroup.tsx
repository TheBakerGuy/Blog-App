import {
  FormControl,
  FormLabel,
  InputGroup as ChakraInputGroup,
  Input,
  InputRightElement,
  Button,
  FormControlProps,
} from "@chakra-ui/react";
import React from "react";

interface InputGroupProps extends FormControlProps {
  onChange: (value: any) => void;
  value: any;
  placeholder: string;
  disabled?: boolean;
  onClick: (value: any) => void;
  label: string;
  icon: any;
  isRequired?: boolean;
}

const InputGroup: React.FC<InputGroupProps> = (props) => {
  const { onChange, value, placeholder, disabled, onClick, label, icon, isRequired } = props;
  return (
    <FormControl className={props.className}>
      <FormLabel>
        {label}
        {isRequired && <span style={{ color: "#e53e3e", marginLeft: "0.25rem" }}>*</span>}
      </FormLabel>
      <ChakraInputGroup size="md">
        <Input type="text" placeholder={placeholder} onChange={onChange} value={value} onFocus={props.onFocus} />
        <InputRightElement>
          <Button onClick={onClick} variant="unstyled" disabled={disabled}>
            {icon}
          </Button>
        </InputRightElement>
      </ChakraInputGroup>
    </FormControl>
  );
};

export default InputGroup;
