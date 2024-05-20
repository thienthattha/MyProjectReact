// Layouts
import DefaultLayout from "~/layouts/DefaultLayout";
import HeaderOnly from "~/layouts/HeaderOnly";
import EmptyLayout from "~/layouts/EmptyLayout";

// Page
import Homes from "~/pages/Homes";
import Page1 from "~/pages/Page1";
import Page2 from "~/pages/Page2";
import Page3 from "~/pages/Page3";
import Page4 from "~/pages/Page4";

// Public routes
const publicRoutes = [
  { path: "/", component: Homes, layout: DefaultLayout },
  { path: "/Page1", component: Page1, layout: DefaultLayout },
  { path: "/Page2", component: Page2, layout: DefaultLayout },  
  { path: "/Page3", component: Page3, layout: HeaderOnly },  
  { path: "/Page4", component: Page4, layout: EmptyLayout } 
];

// Private routes
const privateRoutes = [];

export {publicRoutes, privateRoutes};