import { Route, Routes } from 'react-router';
import MinIO from './MinIO';

export const MinIORoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MinIO />} />
    </Routes>
  );
};
