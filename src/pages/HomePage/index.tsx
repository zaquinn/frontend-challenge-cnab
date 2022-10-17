import { Input } from "../../components/Input";
import { Container, CenterContainer, Form, Button } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { api } from "../../services/api";

interface FileData {
  [key: string]: FileList;
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

  const onSubmit = async (data: FileData) => {
    const formData = new FormData();
    formData.append("file", data["file"][0]);

    try {
      const response = await api.post("/api/cnabparser/", formData);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setFileInfo(data);
  };
  return (
    <Container>
      <CenterContainer>
        <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
