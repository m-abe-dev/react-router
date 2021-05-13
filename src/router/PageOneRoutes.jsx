import { PageOne } from "../pageOne";
import { PageOneDetailA } from "../pageOneDetailA";
import { PageOneDetailB } from "../pageOneDetailB";

export const PageOneRoutes = [
  {
    path: "/",
    exact: true,
    children: <PageOne />
  },
  {
    path: "/detailA",
    exact: false,
    children: <PageOneDetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <PageOneDetailB />
  }
];
