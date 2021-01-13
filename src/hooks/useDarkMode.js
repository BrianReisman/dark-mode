import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [value, setter] = useLocalStorage('color')

  return [value, setter];
}
