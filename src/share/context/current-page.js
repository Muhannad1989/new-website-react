import { createContext } from "react";
export const CurrentPageContext = createContext({
  currentPage: "",
  setCurrentPage: () => {}
});
