import Landing from '@/features/misc/routes/Landing';
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Landing /> }];
  const element = useRoutes([...commonRoutes, ...publicRoutes]);

  return <>{element}</>;
};
