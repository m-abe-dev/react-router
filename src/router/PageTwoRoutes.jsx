import { PageTwo } from "../pageTwo";
import { UrlParameter } from "../UrlParameter";

export const PageTwoRoutes = [
  {
    path: "/",
    exact: true,
    children: <PageTwo />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
