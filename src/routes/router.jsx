import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import NewsPage from '../pages/news/News';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch('/news.json'),
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>,
      },

      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/news',
    element: <h1>News Layout</h1>,
  },
  {
    path: 'auth',
    element: <h1>Login</h1>,
  },
  {
    path: '*',
    element: <h1>Error</h1>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/news/:id',
    element: (
      <PrivateRoute>
        <NewsPage></NewsPage>,
      </PrivateRoute>
    ),
  },
]);

export default router;
