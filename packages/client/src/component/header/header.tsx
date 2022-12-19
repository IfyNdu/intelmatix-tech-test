
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { Stock } from "../../types";
import { Dropdown } from "../dropdown/dropdown";
import { DropdownRenderer } from "./dropdown-renderer";

import styles from "./header.module.scss";


type Props = {
  onChange: (e: SelectChangeEvent) => void,
  selectedProduct: Stock[];
  stock?: Stock[],
}

export const Header: React.FC<Props> = ({
  onChange,
  selectedProduct,
  stock
}) => {

  const [selected] = selectedProduct;

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        {selected && (
          <React.Fragment>
            <img className={styles.icon} src={selected?.icon} />
            <div className={styles.product}>
              <span className={styles.name}>{selected?.name}</span>
              <span className={styles.text}>
                <span className={styles.currStock}>{selected?.currentStock}kg</span>
                <span className={styles.greyText}>{selected?.maximumStock}kg</span>
              </span>
            </div>
          </React.Fragment>
        )}
      </div>
      <div className={styles.right}>
        <Dropdown
          onChange={onChange}
          selected={selectedProduct}
          data={stock}
          label={"Products"}
          id={"header-dropdown"}
          cellRenderer={DropdownRenderer}
          width={260}
        />
      </div>
    </div>
  )
};
