import Home from "../../components/home/Home";
import CryptoComponent from "../../components/crypto/Crypto";
import WatchList from "../../components/watchlist/Watchlist";
import NotFound from "../../components/not_found/NoFound";

export const routesConfig = [
  {
    name: "Home",
    path: "/home",
    component: Home
  },
  {
    name: "Crypto",
    path: "/crypto",
    component: CryptoComponent
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    component: WatchList,
  },
  {
    name: "Not Found",
    path: "*",
    component: NotFound
  },
];
