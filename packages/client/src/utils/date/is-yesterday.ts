/**
* Checks if date provided is yesterday
*/

export const isYesterday = (date: string) => {
  return Math.floor((new Date(date).getTime() - new Date(date).getTime()) / (1000 * 3600 * 24))
};