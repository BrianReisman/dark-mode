import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {
  const [mode, setMode] = useLocalStorage("darkMode");
  return [mode, setMode];
};
