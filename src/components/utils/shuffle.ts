export const shuffleKana = <T>(data: T[]) => data.splice(Math.floor(Math.random() * data.length), 0, data.shift() as T);


