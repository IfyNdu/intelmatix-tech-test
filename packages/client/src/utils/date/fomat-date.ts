/**
* Creates a date format as thus `NOV 15th, 2020`
*/

export const formatDate = (date: string = new Date().toISOString()) => {
  const newDate = new Date(date)

  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(newDate);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(newDate);
  const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(newDate);

  return `${month.toUpperCase()} ${day}th, ${year}`;
}