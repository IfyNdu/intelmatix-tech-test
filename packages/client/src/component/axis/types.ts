export type BaseAxis = {
  dataKey?: string;
  label: {
    angle?: number;
    offset?: number;
    position: string;
    value: string;
  };
  line?: boolean;
  tickLine?: boolean;
};
