import { Container, ErrorMessage } from "./styles";
import { UseFormRegister } from "react-hook-form";

interface FileData {
  [key: string]: FileList;
}

interface InputProps {
  register: UseFormRegister<FileData>;
  errors: string | undefined;
  label: string;
  name: string;
  type: string;
  display?: string;
  accept?: string;
}

export const Input = ({
  register,
  errors,
  label,
  name,
  type,
  display,
  accept,
}: InputProps) => {
  return (
    <Container>
      <label>
        {label}
        <input
          {...register(name)}
          type={type}
          style={{ display: `${display}` }}
          accept={accept}
        />
      </label>
      {!!errors && <ErrorMessage>{errors}</ErrorMessage>}
    </Container>
  );
};
