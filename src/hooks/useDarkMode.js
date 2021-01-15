import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [value, setter] = useLocalStorage('colorzzz', initialValue)

  return [value, setter];
}
