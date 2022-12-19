import { DAY_OF_WEEK, DayOfWeek } from "../../types";

/**
* Returns day of the week (SUN, MON, TUE)
*/

export const getDayOfWeek = (date: string): DayOfWeek => {

  return DAY_OF_WEEK[new Date(date).getDay()]
};
