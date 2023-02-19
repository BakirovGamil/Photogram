import Feed from '@/views/Feed';
import ProfileWrapper from '@/views/profile/ProfileWrapper';

export const publicRoutes = [
  { path: '/', element: <Feed /> },
  { path: '/:userId', element: <ProfileWrapper /> },
];
