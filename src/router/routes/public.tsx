// src/routes/public.tsx
import type { RouteObject } from "react-router-dom";
import Home from "../../pages/Home"; // or your public page
import SignInPage from "../../pages/SignInPage"; // optional

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
];

export default publicRoutes;
