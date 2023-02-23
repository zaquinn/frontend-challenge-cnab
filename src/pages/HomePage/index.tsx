import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Button, CenterContainer, Container, Form } from "./styles";

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
// const schemaEmail = yup.object().shape({
//   files: yup
//       .mixed()
//       .test('required', 'Envio de arquivo obrigatório', (files) => {
//           return files && files.length > 0
//       })
//       .test('fileSize', 'Os arquivos são grandes demais. Tamanho máximo: 5mb', (files) => {
//           const totalSize = files.length > 0 && files.reduce((acc, file) => acc + file.size, 0)
//           return files && files.length && totalSize <= 5000000
//       })
//       .test('type', 'Formatos suportados: .png, .jpeg, .pdf', (files) => {
//           const filterFilesType =
//               files.length > 0 && files.filter((file) => ['image/png', 'image/jpeg', 'application/pdf'].includes(file.type))
//           return files && files.length && filterFilesType.length === files.length
//       }),
//   emailSubject: yup.string().required('Assunto do e-mail obrigatório'),
//   emailBody: yup.string().required('Corpo do e-mail obrigatório'),
// })
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
