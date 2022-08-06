import AdminLayout from "@/components/templates/admin/AdminLayout";
const adminRoutes = [
  {
    path: "/admin/pages/dashboard",
    element: <AdminLayout />,
    meta: {
      breadcrumb: () => "Admin",
    },
    children: [
      {
        path: "/",
        element: "Ini dashboard",
        meta: {
          breadcrumb: () => " Dashboard",
        },
      },
      {
        path: ":postId",
        element: "Ini Child",
        meta: {
          breadcrumb: () => " Child",
        },
      },
    ],
  },
];
export default adminRoutes;
