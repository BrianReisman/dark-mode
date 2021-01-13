import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [value, setter] = useLocalStorage('colorzzz')

  return [value, setter];
}
