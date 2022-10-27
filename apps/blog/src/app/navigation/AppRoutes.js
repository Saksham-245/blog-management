import React from "react";
import { Navigate, Route } from "react-router-dom";

const AppRoutes = ({ element: Element, path, isPrivate, ...rest }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        isPrivate ? (
          <Navigate to={{ pathname: "/" }} />
        ) : (
          <Element {...props} />
        )
      )}
      {...rest}
    />
  );
};

export default AppRoutes;
