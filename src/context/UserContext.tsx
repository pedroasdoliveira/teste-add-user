/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, Dispatch, ReactNode, useContext, useState, useEffect } from 'react';

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

    const handleSubmit = () => {
        setUsers([...users, user]);

        setUser({
          name: "",
          email: "",
          date: "",
          cpf: "",
          tel: "",
          job: "",
        });
    };

    return (
        <UserContext.Provider value={{ user, setUser, handleSubmit, users }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);