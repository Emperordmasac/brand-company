import { useRoutes } from 'react-router-dom';

import MainLayout from '../layouts/main-layout';
import Home from '../pages/home';

const Router = () => {
  let routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ];

  let element = useRoutes(routes);
  return element;
};

export default Router;
