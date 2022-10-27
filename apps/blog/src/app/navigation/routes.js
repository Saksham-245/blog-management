import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";

export const routes = [
  {
    path: '/',
    element: <Home />,
    isPrivate: false,
  },
  {
    path: '/blog/:id',
    element: <BlogDetail />,
    isPrivate: false,
  },
  {
    path: '/login',
    element: <Login />,
    isPrivate: false,
  },
  {
    path: '/signup',
    element: <SignUp />,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    isPrivate: true,
  }
]
