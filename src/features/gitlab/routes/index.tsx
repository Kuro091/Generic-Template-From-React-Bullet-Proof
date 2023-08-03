import { Route, Routes } from 'react-router';
import GitLab from './GitLab';

export const GitLabRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<GitLab />} />
    </Routes>
  );
};
