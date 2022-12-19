export const DAY_OF_WEEK: { [k: number]: string } = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT"
} as const;

type ObjectValues<T> = T[keyof T];

export type DayOfWeek = ObjectValues<typeof DAY_OF_WEEK>