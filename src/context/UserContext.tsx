/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, Dispatch, ReactNode, useContext, useState } from 'react';
import * as Yup from "yup";

type Props = {
    children: ReactNode
}

export type UserDatasType = {
    name: string;
    email: string;
    date: string;
    cpf: string;
    tel: string;
    job: string;
}

interface UserProviderData {
  user: UserDatasType;
  setUser: Dispatch<UserDatasType>;
    handleSubmit: () => void;
    users: UserDatasType[];
}

const UserContext = createContext({} as UserProviderData);

export const UserContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserDatasType>({
        name: "",
        email: "",
        date: "",
        cpf: "",
        tel: "",
        job: ""
    });
    const [users, setUsers] = useState<UserDatasType[]>([]);

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("Nome é obrigatório!"),
      email: Yup.string()
        .email("Digite um e-mail válido")
        .required("Email é obrigatório"),
      date: Yup.string().required("A data é obrigatório!"),
      cpf: Yup.string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido")
        .required("CPF é obrigatório!"),
      tel: Yup.string()
        .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Telefone inválido")
        .required("Telefone é obrigatório!"),
      job: Yup.string().required("O cargo é obrigatório!"),
    });

    const handleSubmit = async () => {
        try {
            await validationSchema.validate(user, { abortEarly: false });

            setUsers([...users, user]);

            setUser({
              name: "",
              email: "",
              date: "",
              cpf: "",
              tel: "",
              job: "",
            });
        } catch (error) {
            alert(`Erro ao cadastrar informações do formulario: ${error}`)
            console.error(error);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, handleSubmit, users }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);