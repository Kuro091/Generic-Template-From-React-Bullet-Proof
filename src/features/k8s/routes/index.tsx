import { Route, Routes } from 'react-router';
import K8S from './K8S';

export const K8SRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<K8S />} />
    </Routes>
  );
};
