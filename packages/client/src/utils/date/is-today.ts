/**
* Checks if date provided is today
*/

export const isToday = (date: string) => {
  return new Date(date).toLocaleDateString() === new Date().toLocaleDateString() 
};