import type { RouteObject } from "react-router-dom";
import AdminRoute from "../guards/AdminRoute";
import { lazy } from "react";

const AdminDashboard = lazy(() => import("../../pages/AdminDashboard"));


const adminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
  },
];

export default adminRoutes;
