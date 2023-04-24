import {useEffect, useState} from 'react';

/**

 @description Shuffles an array and returns a new shuffled array.
 @param array - The array to be shuffled.
 @returns A new shuffled array.
 @template T - The type of array elements.
 @example
 const arr = [1, 2, 3, 4, 5];
 const shuffledArr = useShuffle(arr);
 console.log(shuffledArr); // [2, 4, 1, 5, 3]
 */
export const useShuffle = <T>(array: T[]): T[] => {
  const [shuffled, setShuffled] = useState<T[]>([]);

  useEffect(() => {
    setShuffled(array.sort(() => Math.random() - 0.5));
  }, [array]);

  return shuffled;
};