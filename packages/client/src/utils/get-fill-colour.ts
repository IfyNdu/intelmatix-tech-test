import { dateUtils } from "../utils";
import { COLOURS } from "../types";

/**
* Returns a css hex colour for highlighting bars in the past, today and future 
*/

export const getFillColour = (date: string) => {

  if (dateUtils.isToday(date)) {
    return COLOURS.darkGray
  }

  if (dateUtils.isInThePast(date)) {
    return COLOURS.lightGray
  }

  return COLOURS.lighterGray
};
