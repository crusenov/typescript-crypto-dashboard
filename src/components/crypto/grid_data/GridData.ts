import { GridColDef } from "@mui/x-data-grid";

export const gridColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "exchangeId", headerName: "Exchange Id", width: 250 },
  {
    field: "volumeUsd",
    headerName: "Volume USD",
    type: "number",
    width: 250,
    editable: true,
    headerAlign: "right",
  },
  {
    field: "percentTotalVolume",
    headerName: "Percent Total Volume",
    type: "number",
    width: 250,
    editable: true,
    headerAlign: "right",
  },
  {
    field: "tradingPairs",
    headerName: "Trading Pairs",
    type: "number",
    sortable: true,
    width: 250,
    headerAlign: "right",
  },
];
