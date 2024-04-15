"use client";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-enterprise"

export const TableAgGrid = ({
  rowData,
  colDefs,
  currentTheme = "light",
}) => {
  return (
    <div
      className={
        currentTheme === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz"
      }
      style={{
        height: 600,
        // width: "100%",
      }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
};
