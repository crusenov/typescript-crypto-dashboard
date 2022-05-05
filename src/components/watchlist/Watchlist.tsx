import { useEffect, ReactElement, FC, useState } from "react";
import { useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";

import { gridColumns } from "./grid_data/GridData";
import { Crypto } from "../../models/crypto";

const WatchList: FC = (): ReactElement => {
  const cryptoReducer = useSelector((state) => state.cryptoReducer);
  const [watchListData, setWatchListData] = useState([]);

  // Need to add better implementation with material ui ids(for data grid).
  // Right now there aren't ids in redux.
  useEffect(() => {
    if(cryptoReducer.watchlistData.length > 0) {
      const watchData = cryptoReducer.data.filter((el: Crypto) => {
        return cryptoReducer.watchlistData.includes(el.id);
      })
      setWatchListData(watchData)
    } 
    
    return () => {
      setWatchListData([])
    }
  }, []);

  return (
    <div style={{ height: 650, width: "100%" }}>
      {cryptoReducer.watchlistData.length > 0
        ? <DataGrid
            rows={watchListData}
            columns={gridColumns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            // onSelectionModelChange={(newSelectionModel) => {
            //   dispatch(cryptoActions.setWatchlistDataSucces(newSelectionModel as string[]));
            // }}
            // selectionModel={cryptoReducer.watchlistData}
            initialState={{
              sorting: {
                sortModel: [
                  {
                    field: "volumeUsd",
                    sort: "desc",
                  },
                ],
              },
            }}
        />
        : <p>No selected data found!!! ...</p>
    } 
    </div>
  );
};

export default WatchList;
