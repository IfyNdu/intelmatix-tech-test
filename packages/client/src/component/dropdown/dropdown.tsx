import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";


type DropdownData = {
  id: number;
  value?: string;
};

type Props<T> = {
  cellRenderer: (p: T) => React.ReactElement;
  data?: T[];
  defaultValue?: string;
  id: string;
  label: string;
  minWidth?: number;
  onChange: (e: SelectChangeEvent) => void;
  selected: T[];
  width: number;
}

export const Dropdown = <T extends DropdownData,>({
  onChange,
  cellRenderer,
  selected,
  data,
  defaultValue,
  label,
  id,
  width,
  minWidth = 120
}: Props<T>) => {

  const [value] = selected;

  return (
      <Box sx={{ minWidth, width }}>
        <FormControl fullWidth>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            defaultValue={defaultValue}
            labelId={"dropdown-label"}
            value={`${value?.id ?? ""}`}
            label={label}
            onChange={onChange}>
            {data?.map(cell => {
              return (
                <MenuItem key={cell.id} value={cell.id}>
                  {cellRenderer(cell)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
  )
};
