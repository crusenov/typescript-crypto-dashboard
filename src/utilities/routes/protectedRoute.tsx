import { ElementType, FC} from "react";
import { Route, Redirect } from "react-router-dom";
import { routesConfig } from "./routes";

type PrivateRouteProps = {
  exact: boolean;
  path: string;
  component: ElementType;
};

export const ProtectedRoute : FC<PrivateRouteProps> = ({
  component: Component,
  path,
  ...rest
})  => {
  const availableRoutes = routesConfig.map((el) => el.path).slice(0, routesConfig.length - 1);
  
  return (
    <Route
      {...rest}
      children={(props) => {
        if (availableRoutes.includes(path)) {
          return <Component {...rest} {...props} />;
        } 

        return (
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        );
      }}
    />
  );
};
