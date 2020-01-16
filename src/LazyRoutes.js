// src/shared/app/routes.js
import loadable from "loadable-components";

export const Admin = loadable(() => import("./pages/Admin"));
export const Home = loadable(() => import("./pages/Home"));
export const Error404 = loadable(() => import("./pages/Error404"));
export const Auth = loadable(() => import("./pages/Auth"));
export const UserHistory = loadable(() => import("./pages/UserHistory"));
export const BookDetail = loadable(() => import("./pages/BookDetail"));
export const SearchPage = loadable(() => import("./pages/SearchPage"));
export const MyBooksPage = loadable(() => import("./pages/MyBooksPage"));
