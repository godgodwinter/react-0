import adminRoutes from "@/routes/adminRoutes";
import Home from "@/components/pages/HomeIndex";
import Form from "@/components/pages/FormIndex";
import Posts from "@/components/pages/PostsIndex";

const routes = [
  {
    path: "/",
    element: <Home />,
    meta: {
      breadcrumb: () => "Home",
    },
  },
  {
    path: "/examples/form",
    element: <Form />,
    meta: {
      breadcrumb: () => "Form",
    },
  },
  {
    path: "posts",
    element: <Posts />,
    pendingElement: async () => <div>Taking a long time...</div>,
    pendingMs: 1000 * 5, // 2 seconds
    pendingMinMs: 5000, // If it's shown, ensure the pending element is rendered for at least 500ms
    meta: {
      breadcrumb: () => "Posts",
    },
  },
];

routes.push(...adminRoutes);

export default routes;
