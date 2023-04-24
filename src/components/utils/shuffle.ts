/**

 @description Shuffles an array by removing the first item and placing it at a random index in the array.
 @param data - The array to shuffle.
 @returns The shuffled array.
 @example
 const kana = ['あ', 'い', 'う', 'え', 'お'];
 shuffleKana(kana);
 console.log(kana); // ['い', 'あ', 'う', 'え', 'お']
 */
export const shuffleKana = <T>(data: T[]) => data.splice(Math.floor(Math.random() * data.length), 0, data.shift() as T);


