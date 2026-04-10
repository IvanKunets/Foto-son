import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Reviews } from './pages/Reviews';
import { Contacts } from './pages/Contacts';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'gallery', Component: Gallery },
      { path: 'reviews', Component: Reviews },
      { path: 'contacts', Component: Contacts },
      { path: '*', Component: NotFound },
    ],
  },
]);
