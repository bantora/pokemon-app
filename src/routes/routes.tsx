import type { RouteObject } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/error-page";
import GenList from "../pages/gen-list";

export const routes: RouteObject[] = [
	{
    path: "/pokemon-app/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':gen',
        element: <GenList />
      },
    ]
  },
]