import { Switch, withRouter } from "react-router-dom";

import Navigation from "./components/navbar/index";
import { ProtectedRoute } from './utilities/routes/protectedRoute';
import { routesConfig } from './utilities/routes/routes';

function App() {
  const routeComponents = routesConfig.map(({ path, component }) => (
    <ProtectedRoute exact path={path} component={component} />
  ));

  return (
    <>
      <Navigation />
      <Switch>{routeComponents}</Switch>
    </>
  );
}

export default withRouter(App);
