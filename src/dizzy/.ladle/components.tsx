import type { GlobalProvider } from "@ladle/react";
import { GlobalStyles } from "../GlobalStyles";

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);
