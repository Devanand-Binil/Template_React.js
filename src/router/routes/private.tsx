// src/routes/private.tsx
import type { RouteObject } from "react-router-dom";
import AuthTest from "../../pages/AuthTest";
import ProtectedRoute from "../guards/ProtectedRoute";

const privateRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: (
        <ProtectedRoute>
            <AuthTest/>
        </ProtectedRoute>
    ),
  },
];

export default privateRoutes;
