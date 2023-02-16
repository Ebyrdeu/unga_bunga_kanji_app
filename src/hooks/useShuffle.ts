import {useEffect, useState} from "react";

export const useShuffle = <T>(array: T[]): T[] => {
  const [shuffled, setShuffled] = useState<T[]>([]);

  useEffect(() => {
    setShuffled(array.sort(() => Math.random() - 0.5));
  }, [array]);

  return shuffled;
};