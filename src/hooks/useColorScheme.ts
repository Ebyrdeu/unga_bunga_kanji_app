import {type ColorScheme} from '@mantine/core';
import {useHotkeys, useLocalStorage} from '@mantine/hooks';

/**

 @description Retrieves and toggles the current color scheme using local storage.
 @returns An object containing the current color scheme and a function to toggle the color scheme.
 @example
 const { colorScheme, toggleColorScheme } = useColorScheme();
 console.log(colorScheme); // 'dark'
 toggleColorScheme('light');
 */

export const useColorScheme = () => {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  /**

   @description Toggles the current color scheme.
   @param value - The color scheme to toggle to. If no value is provided, it will toggle to the opposite color scheme.
   */
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  // Adds a keyboard shortcut to toggle the color scheme.
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return {
    colorScheme,
    toggleColorScheme,
  };

};

