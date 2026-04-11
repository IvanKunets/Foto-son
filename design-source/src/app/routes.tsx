import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Reviews } from './pages/Reviews';
import { Contacts } from './pages/Contacts';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminRequests } from './pages/AdminRequests';
import { AdminServices } from './pages/AdminServices';
import { AdminGallery } from './pages/AdminGallery';
import { AdminReviews } from './pages/AdminReviews';
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
  {
    path: '/admin',
    Component: AdminLogin,
  },
  {
    path: '/admin/dashboard',
    Component: AdminDashboard,
  },
  {
    path: '/admin/requests',
    Component: AdminRequests,
  },
  {
    path: '/admin/services',
    Component: AdminServices,
  },
  {
    path: '/admin/gallery',
    Component: AdminGallery,
  },
  {
    path: '/admin/reviews',
    Component: AdminReviews,
  },
]);