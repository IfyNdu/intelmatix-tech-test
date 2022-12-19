import { clsx } from "clsx";
import { dateUtils } from "../../utils";
import { AxisTickRenderer } from "../../types";

import styles from "./tick-renderer.module.scss";


export const TickRenderer: AxisTickRenderer = ({ payload, x, y }) => {

  const { value } = payload;
  const day = dateUtils.getDayOfWeek(value);
  const isToday = dateUtils.isToday(value);

  return (
    <g transform={`translate(${x},${y + 4})`}>
      <text
        className={clsx(styles.text, {
          [styles.isToday]: isToday
        })}
        x={0}
        y={0}
        dy={16}
        textAnchor={"middle"}>
        {day}
      </text>
    </g>
  );
};
