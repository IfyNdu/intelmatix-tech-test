import { clsx } from "clsx";
import React from "react";
import { Stock } from "../../types";

import styles from "./header.module.scss";


type Props = Stock;

export const DropdownRenderer = ({ id, name }: Props) => {

  return (
    <span>
      {name}
      <span className={clsx(styles.greyText, styles.rendererId)}>#{id}</span>
    </span>
  )
};
