import { dateUtils } from "../../utils";
import { BarChartLabelRenderer } from "../../types";

import styles from "./label-renderer.module.scss";
import React from "react";


export const LabelRenderer: BarChartLabelRenderer = ({ width, values, x, y }) => {

  if (!dateUtils.isToday(values)) {
    return <text />
  }

  const textDataSource = [{
    children: "Today",
    dy: -26,
    textAnchor: "end",
    x: (x + width / 2) - 6
  }, {
    children: dateUtils.formatDate(),
    dy: -12,
    textAnchor: "middle",
    x: (x + width / 2) + 2
  }];

  return (
    <React.Fragment>
      {textDataSource.map((data, index) => {
        return (
          <text
            key={index}
            children={data.children}
            className={styles.text}
            dy={data.dy}
            textAnchor={data.textAnchor}
            x={data.x}
            y={y}
          />
        );
      })}
    </React.Fragment>
  );
};