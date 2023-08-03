import { Route, Routes } from 'react-router';
import Jenkins from './Jenkins';

export const JenkinsRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Jenkins />} />
    </Routes>
  );
};
