import Feed from '@/views/feed/Feed';
import ProfileWrapper from '@/views/profile/ProfileWrapper';

export const publicRoutes = [
  { path: '/', element: <Feed /> },
  { path: '/:userId', element: <ProfileWrapper /> },
];
