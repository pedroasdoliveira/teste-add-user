import { ReactNode } from "react";
import { UserContextProvider } from "./UserContext"

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <>
          <UserContextProvider>
              {children}
      </UserContextProvider>
    </>
  );
}

export default Provider;