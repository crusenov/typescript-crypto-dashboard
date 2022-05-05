import { useEffect, ReactElement, FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from 'uuid';

import { gridColumns } from "./grid_data/GridData";
import * as cryptoActions from "../../../src/store/actions/cryptoActions"
import { Crypto } from "../../models/crypto";

const CryptoComponent: FC = (): ReactElement => {
  const cryptoReducer = useSelector((state) => state.cryptoReducer);
  const dispatch = useDispatch();
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    dispatch(cryptoActions.fetchCryptoRequest())

    return () => {
      if(cryptoReducer.isCryptoDataSuccess) {
        dispatch(cryptoActions.fetchedCryptoSucces(false))
      }
    }
  }, []);

  useEffect(() => {
    if(cryptoReducer.isCryptoDataSuccess) {
      setCryptoData(cryptoReducer.data.map((el: Crypto) => {
        el.id = uuidv4()
        return el;
      }))
    }
  }, [cryptoReducer.isCryptoDataSuccess])

  return (
    <div style={{ height: 650, width: "100%" }}>
      {!cryptoReducer.loading
        ? <DataGrid
            rows={cryptoData}
            columns={gridColumns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(newSelectionModel) => {
              dispatch(cryptoActions.setWatchlistDataSucces(newSelectionModel as string[]));
            }}
            selectionModel={cryptoReducer.watchlistData}
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
        : <p>Loading ...</p>
    } 
    </div>
  );
};

export default CryptoComponent;
