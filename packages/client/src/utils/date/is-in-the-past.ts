/**
* Checks if date provided is in the past
*/

export const isInThePast = (date: string) => {
  return new Date(date).toLocaleDateString() < new Date().toLocaleDateString() 
};