import { Input } from "../../components/Input";
import { Container, CenterContainer, Form, Button } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FileData {
  [key: string]: File;
}

const fileSchema = yup.object().shape({
  file: yup
    .mixed()
    .test("required", "Envio de arquivo obrigatório", (value) => {
      return value && value.length;
    })
    .test("fileSize", "O arquivo é grande demais", (value, context) => {
      return value && value[0] && value[0].size <= 20000;
    })
    .test("type", "Único formato suportado: .txt", (value) => {
      return value && value[0] && value[0].type === "text/plain";
    }),
});

export const HomePage = () => {
  const [fileInfo, setFileInfo] = useState<FileData>();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FileData>({
    resolver: yupResolver(fileSchema),
  });

  const onSubmit = (data: FileData) => {
    setFileInfo(data);
  };
  return (
    <Container>
      <CenterContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            errors={errors.file?.message}
            register={register}
            name="file"
            label="Selecionar arquivo"
            type="file"
            display="none"
            accept=".txt"
          />
          <Button>Enviar</Button>
        </Form>
      </CenterContainer>
    </Container>
  );
};
