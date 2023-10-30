import { useRoutes } from 'react-router-dom';

import MainLayout from '../layouts/main-layout';
import Home from '../pages/home';
import About from '../pages/about';
import ContactUs from '../pages/contact-us';
import Faq from '../pages/faq';

const Router = () => {
  let routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contactus', element: <ContactUs /> },
        { path: 'faq', element: <Faq /> },
      ],
    },
  ];

  let element = useRoutes(routes);
  return element;
};

export default Router;
